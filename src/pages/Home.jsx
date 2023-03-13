import { Typography } from '@mui/material';
import { BaseContainer } from './Base.styled';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <BaseContainer component="main" sx={{ paddingTop: 8, display: 'flex' }}>
      <Typography variant="h4" component="h1" fontWeight={500}>
        Phone Book welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Typography>
    </BaseContainer>
  );
}
