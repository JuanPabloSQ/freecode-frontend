import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function NavBar() {
  const theme = useTheme();

  const menuItems = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Services' },
    { label: 'Contact' },
  ];

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
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                sx={{
                  '&:hover': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link} 
              to="/quote-machine" 
              variant="text" 
              color="inherit"
            >
              Quote Machine
            </Button>
            <ChevronRightIcon sx={{ display: { xs: 'none', sm: 'block' }, ml: 0 }} />  
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
