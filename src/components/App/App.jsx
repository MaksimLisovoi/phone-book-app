import { Layout } from 'components/Layout/Layout';
import { useAuth } from 'hooks';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { GlobalStyle } from 'components/GlobalStyle';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
