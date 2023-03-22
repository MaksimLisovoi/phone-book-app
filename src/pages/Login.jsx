import { LoginForm } from 'components/LoginForm';
import { BaseContainer } from './Base.styled';
export default function Login() {
  return (
    <BaseContainer component="main" maxWidth="xs" sx={{ paddingTop: 8 }}>
      <LoginForm />
    </BaseContainer>
  );
}
