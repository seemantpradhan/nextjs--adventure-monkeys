import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 }, backgroundColor: 'secondary.light' }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}