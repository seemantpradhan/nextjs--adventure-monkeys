import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }]

export default function LandingSection() {
  const router = useRouter()

  const handleExplore = () => {
    router.push('/activities')
  }

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
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        sx={{width: '100%', backgroundColor: 'secondary.light', borderRadius: '1rem', color: 'secondary.main'}}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{borderRadius: '1rem', border:'', backgroundColor: 'secondary.light', fontColor: 'secondary.main'}}
            label="Search adventure or event"
            // slotProps={{
            //   input: {
            //     // ...params.InputProps,
            //     type: 'search',
            //   },
            // }}
          />
        )}
      />
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
        onClick={handleExplore}
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