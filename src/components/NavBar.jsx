import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function NavBar() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '20px',
          width: { xs: '90%', sm: '62%' },
          boxShadow: theme.shadows[5],
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar>
          <ChevronLeftIcon sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/freecode-frontend/"
              variant="text"
              color="inherit"
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/freecode-frontend/quote-machine"
              variant="text"
              color="inherit"
            >
              Quote Machine
            </Button>
            <Button
              component={Link}
              to="/freecode-frontend/calculator"
              variant="text"
              color="inherit"
            >
              Calculator
            </Button>
            <Button
              component={Link}
              to="/freecode-frontend/clock"
              variant="text"
              color="inherit"
            >
              Clock
            </Button>
            <Button
              component={Link}
              to="/freecode-frontend/drum-machine"
              variant="text"
              color="inherit"
            >
              Drum Machine
            </Button>
            <Button
              component={Link}
              to="/freecode-frontend/markdown"
              variant="text"
              color="inherit"
            >
              Markdown
            </Button>
            <ChevronRightIcon sx={{ display: { xs: 'none', sm: 'block' }, ml: 0 }} />  
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
