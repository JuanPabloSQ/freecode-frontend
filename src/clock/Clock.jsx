import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RefreshIcon from '@mui/icons-material/Refresh';

const formatInMM_SS = (mins, seconds) => {
  return `${mins < 10 ? '0' : ''}${mins}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const initialState = {
  timerMins: 25,
  timerSec: 0,
  breakMins: 5,
  sessionMins: 25,
  formattedTime: formatInMM_SS(25, 0)
};

const Clock = () => {
  const [state, setState] = useState(initialState);
  const [sessionState, setSessionState] = useState('pause');
  const [currentScreen, setCurrentScreen] = useState('session');
  const [intervalID, setIntervalID] = useState(null);
  const audioElement = useRef(null);

  const handleTimer = () => {
    let nextIntervalTime = 1000;
    let { timerMins, timerSec } = state;
    let intervalCleared = true;

    const timerID = setInterval(() => {
      const startTime = Date.now();

      if (timerSec === 0) {
        timerSec = 60;
        timerMins--;
      }
      timerSec--;

      if (timerMins < 0 && intervalCleared) {
        timerSec = 0;
        intervalCleared = false;
        clearInterval(timerID);
        const nextScreen = currentScreen === 'session'
          ? 'break'
          : currentScreen === 'break'
            ? 'session'
            : 'break';

        timerMins = state[`${nextScreen}Mins`];
        setState({
          ...state,
          timerMins,
          formattedTime: formatInMM_SS(timerMins, timerSec)
        });

        setCurrentScreen(nextScreen);
        setSessionState('restart');
      }
      setState({
        ...state,
        timerMins,
        timerSec,
        formattedTime: formatInMM_SS(timerMins, timerSec)
      });

      const endTime = Date.now();
      nextIntervalTime = 1000 - (endTime - startTime);
    }, nextIntervalTime);
    return timerID;
  };

  const handleTimeSetControls = (type, action) => {
    if (sessionState === 'playing') return;

    const modifiedState = { ...state };

    const key = `${type}Mins`;
    if (action === 'inc' && state[key] < 60) {
      modifiedState[key] = modifiedState[key] + 1;
    } else if (action === 'dec' && state[key] > 1) {
      modifiedState[key] = modifiedState[key] - 1;
    } else return;

    if (type === currentScreen) {
      setState({
        ...modifiedState,
        timerMins: modifiedState[key],
        timerSec: 0,
        formattedTime: formatInMM_SS(modifiedState[key], 0)
      });
    } else {
      setState({ ...modifiedState });
    }
  };

  const handleAudio = (shouldReset = false) => {
    if (shouldReset) {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
    } else {
      audioElement.current.play();
    }
  };

  const handleSessionControls = (type) => {
    if (type === 'reset') {
      setSessionState('pause');
      setCurrentScreen('session');
      setState(initialState);
      handleAudio(true);
    } else {
      if (sessionState === 'playing') {
        setSessionState('pause');
      } else {
        setSessionState('playing');
      }
    }
  };

  useEffect(() => {
    if (sessionState === 'playing') {
      setIntervalID(handleTimer());
    } else {
      clearInterval(intervalID);
      if (sessionState === 'restart') {
        setSessionState('playing');
        handleAudio();
      }
    }
  }, [sessionState]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        25 + 5 Clock
      </Typography>
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box border={1} borderRadius={2} p={2} textAlign="center">
              <Typography variant="h5" id="break-label">
                Break Length
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton onClick={() => handleTimeSetControls('break', 'dec')}>
                  &#10092;
                </IconButton>
                <Typography id="break-length">{state.breakMins}</Typography>
                <IconButton onClick={() => handleTimeSetControls('break', 'inc')}>
                  &#10093;
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box border={1} borderRadius={2} p={2} textAlign="center">
              <Typography variant="h5" id="session-label">
                Session Length
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <IconButton onClick={() => handleTimeSetControls('session', 'dec')}>
                  &#10092;
                </IconButton>
                <Typography id="session-length">{state.sessionMins}</Typography>
                <IconButton onClick={() => handleTimeSetControls('session', 'inc')}>
                  &#10093;
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="timer-wrapper">
        <Typography variant="h5" id="timer-label" textAlign="center">
          {currentScreen} Time
        </Typography>
        <Typography variant="h2" id="time-left" style={{ color: state.timerMins === 0 ? '#bb3a11' : '#066b06' }}>
          {state.formattedTime}
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton id="start_stop" onClick={() => handleSessionControls('play_pause')}>
            {sessionState === 'playing'
              ? <PauseIcon />
              : <PlayArrowIcon />
            }
          </IconButton>
          <IconButton id="reset" onClick={() => handleSessionControls('reset')} title="Reset">
            <RefreshIcon />
          </IconButton>
        </Box>
        <audio id="beep" preload="auto" ref={audioElement}>
          <source src="/hi-hats.wav" type="audio/wav"></source>
        </audio>
      </Box>
    </Container>
  );
};

export default Clock;
