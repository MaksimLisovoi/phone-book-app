import { NavItem } from './Nav.styled';
import { useAuth } from 'hooks';

export const Nav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </nav>
  );
};
