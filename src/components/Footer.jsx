import { Box } from '@mui/material';
import { Copyright } from 'components/Copyright';
export const Footer = () => {
  return (
    <Box as="footer">
      <Copyright sx={{ mt: 8, mb: 4 }} text="Phone Book App" />
    </Box>
  );
};
