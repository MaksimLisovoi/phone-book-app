import { useAuth } from 'hooks';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

export const Nav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="nav" display="flex" gridGap="3">
      <Button
        component={NavLink}
        // variant="contained"
        to="/"
        sx={{
          '&.active': {
            color: 'white',
            background: '#07c',
          },
          '&:hover': {},
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          // variant="contained"
          to="/contacts"
          sx={{
            '&.active': {
              color: 'white',
              background: '#07c',
            },
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
