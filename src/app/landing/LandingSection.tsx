import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function LandingSection() {
  return (
    <>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" >
        Explore the adventures
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        A platform for all the adventures on you trip
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/activities"
        sx={{ minWidth: 200 }}
      >
        Explore
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the monkey in you!
      </Typography>
    </>
  );
}