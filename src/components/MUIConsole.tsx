import React, {useEffect, useRef} from "react";
import {Paper, Typography} from "@mui/material";

interface ConsoleProps {
    data: any
}
export function MUIConsole(props: ConsoleProps) {
    const paperRef: any = useRef(null);

    useEffect(() => {
        if (paperRef.current) {
            paperRef.current.scrollTop = paperRef.current.scrollHeight;
        }
    }, [props?.data]);

    return (
        <Paper
            ref={paperRef}
            style={{
                height: '400px',
                overflowY: 'auto',
                padding: '16px',
            }}
        >
            {props.data && <Typography variant="body1">
                {props.data}
            </Typography>}
        </Paper>
    );
}