import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box } from 'components/Box';

import { useAuth } from 'hooks';

import { Nav } from 'components/Nav';
import { UserMenu } from 'components/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      mb={4}
      p={3}
      borderBottom="1px solid #2a363b"
    >
      <Nav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
