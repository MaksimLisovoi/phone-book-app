import { RegisterForm } from 'components/RegisterForm';
import { BaseContainer } from './Base.styled';
export default function Register() {
  return (
    <BaseContainer component="main" maxWidth="xs" sx={{ paddingTop: 8 }}>
      <RegisterForm />
    </BaseContainer>
  );
}
