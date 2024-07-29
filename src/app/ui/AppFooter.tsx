import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from './common/Typography';
import TextField from '@mui/material/TextField';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Copyright() {
  return (
    <Box color='primary.dark'>
      {'© '}
      <Link color="inherit" href="https://adventuremonkeys.com/">
        Adventure Monkeys
      </Link>{' '}
      {new Date().getFullYear()}
      </Box>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '4px',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={4}>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ justifyContent: 'flex-end', height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://facebook.com/AdventureMonkeys" sx={iconStyle}>
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </Box>
                <Box component="a" href="https://instagram.com/AdventureMonkeys" sx={iconStyle}>
                  <InstagramIcon fontSize="large"></InstagramIcon>
                </Box>
              </Grid>
              <Grid item sx={{ display: 'flex' }}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/privacy">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}