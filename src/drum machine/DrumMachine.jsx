import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, IconButton, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RefreshIcon from '@mui/icons-material/Refresh';
import audioArray from  "./audioArray"; // Importa audioArray sin el default

const DrumMachine = () => {
  const [currentAudioText, setCurrentAudioText] = useState('^_^');

  useEffect(() => {
    document.addEventListener('keypress', playAudio);

    return () => {
      document.removeEventListener('keypress', playAudio);
    };
  }, []);

  const playAudio = (event) => {
    for (let audioObj of audioArray) {
      if (audioObj.keyCode === event.code) {
        handleDrumClick(audioObj);
        return;
      }
    }
  };

  const toggleActiveClass = (text) => {
    const drumPad = document.getElementById(text);
    drumPad.classList.add('drum-pad-active');
    setTimeout(() => {
      drumPad.classList.remove('drum-pad-active');
    }, 50);
  };

  const handleDrumClick = ({ id, text }) => {
    toggleActiveClass(text);
    setCurrentAudioText(text);
    const audio = document.getElementById(id);
    if (audio.currentTime !== 0) {
      audio.currentTime = 0;
    }
    audio.play();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        Drum Pad
      </Typography>
      <Box my={4}>
        <Typography variant="h5" id="display" textAlign="center" sx={{
          backgroundColor: '#f5dbb9',
          border: '5px solid #dfb57f',
          width: 'fit-content',
          padding: '10px 20px',
          borderRadius: '5px',
          margin: '0 auto 10px',
        }}>
          {currentAudioText}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {audioArray.map(audio => (
            <Grid item xs={4} key={audio.id}>
              <Box
                className="drum-pad"
                id={audio.text}
                sx={{
                  backgroundColor: '#f5dbb9',
                  border: '2px solid #dfb57f',
                  height: '80px',
                  width: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    backgroundColor: '#dfb57f',
                    boxShadow: '5px 5px 10px #d39647',
                    transform: 'scale(0.9)',
                  },
                }}
                onClick={() => handleDrumClick(audio)}
              >
                <Typography variant="body1" className="drum-text">
                  {audio.id}
                </Typography>
                <audio className="clip" src={audio.src} id={audio.id}></audio>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DrumMachine;
