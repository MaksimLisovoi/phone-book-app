import { Box } from 'components/Box';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  // const handleLogOut = dispatch(authOperations.logOut());
  return (
    <Box display="flex">
      <h3>Welcome, {user.name}</h3>
      <button onClick={() => dispatch(authOperations.logOut())}>LogOut</button>
    </Box>
  );
};
