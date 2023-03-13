import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ mt: 2, mb: 2 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        {props.text}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
