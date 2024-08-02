'use client'
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AvailableActivity } from './page';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import BookingModal from '@/app/activities/[category]/BookingModal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useAppSelector } from '@/app/store/hooks';
import { useGetActivityOptionsQuery } from '@/app/features/api/apiSlice';
import Skeleton from '@mui/material/Skeleton';

const imageUrl = 'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?auto=format&fit=crop&w=400'

interface ActivityOptionsCards {
  activityCategory: string
}

export default function ActivityOptionsCards({ activityCategory }: ActivityOptionsCards) {
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<AvailableActivity | null>(null);
  const count = useAppSelector((state) => state.counter.count);

  // Calling the `useGetActivityOptionsQuery()` hook automatically fetches data!
  const {
    data: availableOptions = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetActivityOptionsQuery(activityCategory.toLowerCase())
  

  const displayBooking = async (option: AvailableActivity) => {
    setOpenBooking(true)
    setSelectedActivity(option)
  }

  const UnavailableActivity = <>
    <Alert severity="warning" sx={{ margin: 'auto', maxWidth: '40rem' }}>
      <AlertTitle>Work in progress!</AlertTitle>
      This activity is currently not available. We are working on it and will soon be back with some exciting arrangements for this activity.
    </Alert>
  </>

  if (isLoading) {
    return Array.from({ length: 4 }).map(() => {
      return <Skeleton variant="rectangular" animation="wave" width={300} height={200} sx={{ display: 'inline-flex', margin: '1rem' }} />
    })
  }

  else if (isSuccess && !availableOptions?.length) {
    return UnavailableActivity
  }

  else if (isError) {
    console.error(error)
    return <>
      <Alert severity="error" sx={{ margin: 'auto', maxWidth: '40rem' }}>
        <AlertTitle>Error!</AlertTitle>
        Unable to process.
      </Alert>
    </>
  }

  return <>
    <Paper sx={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
      {
        availableOptions?.map((option) => {
          const { caravanid, model, capacity, available, description, priceperday } = option
          return <Card key={caravanid} sx={{ maxWidth: 345, margin: '1rem' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={imageUrl}
              sx={{ maxHeight: 160 }}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 0 }}>
              <Container style={{ padding: 0 }}>
                <Typography variant="h6" component="div">
                  {`${caravanid} - ${model}`}
                </Typography>
                <Rating name="read-only" value={4.3} size="small" readOnly />
              </Container>
              <Chip label={activityCategory} variant="outlined" color='secondary' />
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {`Count - ${count}`}
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Capacity-${capacity} Price per day- ${priceperday}`}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button size="small">Learn More</Button>
              <Button disabled={!available} size="medium" variant="outlined" color="secondary" sx={{ margin: '4px' }} onClick={() => displayBooking(option)}>Book Now</Button>
            </CardActions>
          </Card>
        })

      }
    </Paper>
    <BookingModal open={openBooking} setOpen={setOpenBooking} selectedActivity={selectedActivity} />
  </>
}