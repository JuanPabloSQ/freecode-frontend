import React from 'react';
import NavBar from "../components/NavBar";
import { Typography, Box } from '@mui/material';

const Page = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
            <NavBar/>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Projects for FreeCodeCamp - Frontend Developer Libraries
            </Typography>
            <Typography variant="b1" component="h1" align="center" gutterBottom>
                by Juan Pablo Sepúlveda Q.
            </Typography>
        </Box>
    )
};

export default Page;
