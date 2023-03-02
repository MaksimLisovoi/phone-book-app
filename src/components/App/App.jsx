import { Layout } from 'components/Layout/Layout';
import { Contacts } from 'pages/Contacts';
import Home from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
