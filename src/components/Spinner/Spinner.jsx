import { Box } from 'components/Box';
import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Box display="inline-block" mr={2}>
      <RotatingLines strokeColor="white" width="14" />
    </Box>
  );
};
