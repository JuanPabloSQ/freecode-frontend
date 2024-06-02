import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

const QuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [allQuotes, setAllQuotes] = useState([]);
    const [error, setError] = useState(false);
    const [checkQuote, setCheckQuote] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('./quotes.json')
            .then((res) => res.json())
            .then((quotes) => {
                setAllQuotes(quotes);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (allQuotes.length) {
            generateRandom();
        }
    }, [allQuotes]);

    const generateRandom = () => {
        let randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        while (randomQuote.id in checkQuote) {
            randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        }

        checkQuote[randomQuote.id] = true;
        if (Object.keys(checkQuote).length === allQuotes.length) {
            setCheckQuote({});
        }
        setQuote(randomQuote);
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
                textAlign: 'center',
                transitionDuration: '1s',
                backgroundColor: 'background.default', 
                color: 'text.primary', 
            }}
        >
            {error ? (
                <Typography variant="h4" color="error">
                    Error while fetching the Quotes. Please check the network connection.
                </Typography>
            ) : (
                quote && (
                    <>
                        <Typography variant="h3" gutterBottom>
                            Quote Machine
                        </Typography>
                        <Box
                            id="quote-box"
                            sx={{
                                padding: 4,
                                maxWidth: 500,
                                boxShadow: `0 0 10px 0 #888`,
                                borderRadius: 1,
                                transition: 'box-shadow 1s',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            }}
                        >
                            <Typography variant="h5" id="text" sx={{ mb: 2, color: 'black' }}>
                                “{quote.quote}”
                            </Typography>
                            <Typography variant="subtitle1" id="author" sx={{ color: 'black' }}>
                                - {quote.author}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={generateRandom}
                                    sx={{
                                        backgroundColor: 'text.primary',
                                        color: 'background.default',
                                        '&:hover': {
                                            backgroundColor: 'text.primary',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    Next Quote
                                </Button>
                            </Box>
                        </Box>
                    </>
                )
            )}
        </Box>
    );
};

export default QuoteMachine;
