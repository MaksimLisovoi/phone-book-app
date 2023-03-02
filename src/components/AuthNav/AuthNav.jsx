import { NavItem } from 'components/Nav/Nav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </div>
  );
};
