import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box } from 'components/Box';
import { Container } from 'components/Layout/Layout.styled';
import { useAuth } from 'hooks';

import { Nav } from 'components/Nav';
import { UserMenu } from 'components/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Box
        as="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        pt={3}
        pb={3}
        borderBottom="1px solid #2a363b"
      >
        <Nav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Container>
  );
};
