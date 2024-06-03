import React from 'react';
import NavBar from "../components/NavBar";
import Calculator from "../calculator/Calculator";
import { Container, Box } from '@mui/material';

const CalculatorPage = () => {
    return (
        <div>
            <NavBar/>
            <Container maxWidth="md" sx={{ mt: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(80vh - 64px)' }}>
                <Box >
                    <Calculator/>
                </Box>
            </Container>
        </div>
    )
};

export default CalculatorPage;
