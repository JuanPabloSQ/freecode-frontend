import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, IconButton, CircularProgress } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                backgroundColor: 'rgb(248, 239, 186)', 
                color: '#222', 
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
                            Here are some awesome technical quotes
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
                            <Typography variant="h5" id="text" sx={{ mb: 2 }}>
                                “{quote.quote}”
                            </Typography>
                            <Typography variant="subtitle1" id="author">
                                - {quote.author}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <IconButton
                                    component="a"
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                        quote.quote
                                    )}`}
                                    target="_blank"
                                    sx={{
                                        backgroundColor: '#222',
                                        color: '#FFF',
                                        borderColor: '#222a',
                                        '&:hover': {
                                            backgroundColor: '#222',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <Button
                                    variant="contained"
                                    onClick={generateRandom}
                                    sx={{
                                        backgroundColor: '#222',
                                        color: '#FFF',
                                        '&:hover': {
                                            backgroundColor: '#222',
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
