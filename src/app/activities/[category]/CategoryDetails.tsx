import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@/app/ui/common/Typography';
import CurvyLinesLayout from '@/app/ui/CurvyLinesLayout';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function CategoryDetails({ category }: { category: string }) {
  return (
    <CurvyLinesLayout>
      <Typography variant="h3" marked="center" component="h3" sx={{ mb: 6 }}>
        {category}
      </Typography>
      <Typography variant="h6" component="h6" sx={{ mb: 14 }}>
        How to proceed with the new experiences
      </Typography>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <Box
                component="img"
                src="/productHowItWorks1.svg"
                alt="suitcase"
                sx={image}
              />
              <Typography variant="h5" align="center">
                Book from the interesting options available for your adventure.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <Box
                component="img"
                src="/productHowItWorks2.svg"
                alt="graph"
                sx={image}
              />
              <Typography variant="h5" align="center">
                First come, first served. Our offers are in limited quantities, so
                be quick.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <Box
                component="img"
                src="/productHowItWorks3.svg"
                alt="clock"
                sx={image}
              />
              <Typography variant="h5" align="center">
                {'Go. Explore. Adventure. '}
                {'New experiences, new surprises. '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        component="a"
        href="/signup"
        sx={{ mt: 8 }}
      >
        Get started
      </Button>
    </CurvyLinesLayout>
  );
}

export default CategoryDetails;