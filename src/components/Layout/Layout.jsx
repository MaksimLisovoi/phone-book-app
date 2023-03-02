import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar';
import { Box } from '../Box';

export const Layout = () => {
  return (
    <Box maxWidth="960px" margin="0 auto" padding="0 16px">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
