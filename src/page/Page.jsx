import React from 'react';
import NavBar from "../components/NavBar";
import { Typography } from '@mui/material';

const Page = () => {
    return (
        <div>
            <NavBar/>
            <Typography variant="h3" component="h1" align="center" gutterBottom>
                Projects for FreeCodeCamp - Frontend Developer Libraries
            </Typography>
        </div>
    )
};

export default Page;
