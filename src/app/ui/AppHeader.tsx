import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './common/AppBar';
import Toolbar from './common/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppHeader() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/landing"
            sx={{ fontSize: 24 }}
          >
            {'Adventure Monkey'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: 'secondary.main' }}
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