import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';

import { Container } from './Layout.styled';
import { Footer } from 'components/Footer';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Footer></Footer>
      </Container>
    </>
  );
};
