import { LoginForm } from 'components/LoginForm';
import Container from '@mui/material/Container';
import { BaseContainer } from './Base.styled';
export default function Login() {
  return (
    <BaseContainer component="main" maxWidth="xs" sx={{ paddingTop: 8 }}>
      <LoginForm />
    </BaseContainer>
  );
}
