import React from 'react';
import NavBar from "../components/NavBar"
import Calculator from "../calculator/Calculator"
import { Box } from '@mui/material';

const CalculatorPage = () => {
    return (
        <div>
            <NavBar/>
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                <Calculator/>
            </Box>
        </div>
    )
};

export default CalculatorPage;
