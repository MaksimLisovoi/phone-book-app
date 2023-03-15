import { NavItem } from 'components/Nav/Nav.styled';
import { Box } from 'components/Box';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" gridGap="3">
      <Button
        component={NavLink}
        // variant="contained"
        to="/register"
        sx={{
          '&.active': {
            color: 'white',
            background: '#07c',
          },
        }}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        // variant="contained"
        to="/login"
        sx={{
          '&.active': {
            color: 'white',
            background: '#07c',
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
