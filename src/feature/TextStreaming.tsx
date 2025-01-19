import * as React from "react";
import {MUIButton} from "../components/MUIButton";
import {MUIConsole} from "../components/MUIConsole";
import {useRef, useState} from "react";

function TextStreaming() {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchData = async (type: string) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        setLoading(true);

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        try {
            const response = await fetch(`http://localhost:5000/stream-${type ?? "chars"}`, {
                signal: abortController.signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const reader = response.body?.getReader();

            if (!reader) {
                throw new Error('Failed to get reader from response body.');
            }

            const decoder = new TextDecoder();
            let result = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                result += decoder.decode(value, { stream: true });
                setContent((prevContent) => prevContent + result);
            }
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('Fetch request was aborted.');
            } else {
                console.error('Fetch error:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
            console.log('Fetch request canceled.');
        }
    };

    return (
        <>
            <MUIButton
                title={"Start streaming text"}
                label={"Stream Text"}
                onClick={() => fetchData("text")}
                disabled={loading}
            />
            <MUIButton
                title={"Start streaming characters"}
                label={"Stream Characters"}
                onClick={() => fetchData("chars")}
                disabled={loading}
            />
            <MUIButton
                title={"Stops streaming"}
                label={"Stop"}
                onClick={handleCancel}
            />
            <MUIButton
                title={"Clear the console"}
                label={"Clear"}
                onClick={() => setContent('')}
            />

            <MUIConsole data={content}/>
        </>
    );
}

export default TextStreaming;