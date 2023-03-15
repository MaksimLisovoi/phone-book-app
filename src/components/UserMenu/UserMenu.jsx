import { Box } from 'components/Box';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  // const handleLogOut = dispatch(authOperations.logOut());
  return (
    <Box display="flex" alignItems="center" gridGap="3">
      <Typography fontWeight={500}>Welcome, {user.name}</Typography>
      <Button
        onClick={() => dispatch(authOperations.logOut())}
        component={NavLink}
        variant="outlined"
      >
        LogOut
      </Button>
    </Box>
  );
};
