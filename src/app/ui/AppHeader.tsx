import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import AppBar from './common/AppBar';
import Toolbar from './common/Toolbar';
import Typography from '@mui/material/Typography';
import { Margin } from '@mui/icons-material';


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
  margin: '0.5rem'
};

function AppHeader() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />

          <Link
            color="inherit"
            href="/landing"
            style={{ fontSize: 24, display: 'flex' }}
          >
            <Image src="/adventure_monkeys_logo.png" alt="Adventure Monkeys Logo" width={50} height={50} style={{margin: '0.4rem' }}/>
            <Typography variant="h4" align="center" component="h4" color='common.white' sx={{padding: '0.6rem 0' }}>
              Adventure Monkeys
            </Typography>
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href="/signin"
              style={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              href="/signup"
              style={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppHeader;