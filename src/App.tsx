import * as React from 'react';
import {Container, Box} from '@mui/material';
import {MUIHeader} from "./components/MUIHeader";
import TextStreaming from "./feature/TextStreaming";

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <MUIHeader header={"True Streaming Text Demo"}/>
                <TextStreaming/>
            </Box>
        </Container>
  );
}
