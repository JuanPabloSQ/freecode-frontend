import React from 'react';
import NavBar from "../components/NavBar";
import Markdown from "../markdown/Markdown";
import { Container, Box } from '@mui/material';

const MarkdownPage = () => {
    return (
        <Box>
            <NavBar/>
            <Container 
                maxWidth="md" 
                sx={{ 
                    mt: 10, 
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Markdown />
            </Container>
        </Box>
    )
};

export default MarkdownPage;
