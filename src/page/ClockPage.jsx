import React from 'react';
import NavBar from "../components/NavBar";
import Clock from "../clock/Clock";
import { Container } from '@mui/material';

const ClockPage = () => {
    return (
        <div>
            <NavBar />
            <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Clock />
            </Container>
        </div>
    );
};

export default ClockPage;
