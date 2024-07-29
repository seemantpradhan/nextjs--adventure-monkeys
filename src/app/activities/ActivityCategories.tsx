'use client'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../ui/common/Typography';
import { useRouter } from 'next/navigation'

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400',
    title: 'Snorkeling',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1699489984699-7df94f3ff418?auto=format&fit=crop&w=400',
    title: 'Kayaking',
    width: '20%',
  },
  {
    url: 'https://images.unsplash.com/photo-1503518406936-078df75d0c7c?auto=format&fit=crop&w=400',
    title: 'River Rafting',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1521115715763-2fcaa0608e9b?auto=format&fit=crop&w=400',
    title: 'Hiking / Trekking',
    width: '32%',
  },
  {
    url: 'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?auto=format&fit=crop&w=400',
    title: 'Caravans',
    width: '44%',
  },
  {
    url: 'https://images.unsplash.com/photo-1571983890292-5d10b2f19d86?q=80&w=3024?auto=format&fit=crop&w=400',
    title: 'Camping',
    width: '24%',
  },
  {
    url: 'https://images.unsplash.com/photo-1649654078706-d631244ec1c7?auto=format&fit=crop&w=400',
    title: 'Tour',
    width: '35%',
  },
  {
    url: 'https://images.unsplash.com/photo-1570535790873-76a4dd02c6e9?q=80&w=3870?q=80&w=3024?auto=format&fit=crop&w=400',
    title: 'Jungle Safaris',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1634796222115-bdc095378a40?q=80&w=2667?auto=format&fit=crop&w=400',
    title: 'Off-Roading',
    width: '35%',
  },
];

export default function ActivityCategories() {
  const router = useRouter()

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            onClick={() => router.push(`/activities/${image.title}`)}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}