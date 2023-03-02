import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" autoComplete="off" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="off" />
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
};
