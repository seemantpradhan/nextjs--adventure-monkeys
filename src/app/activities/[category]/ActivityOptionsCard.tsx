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

const imageUrl = 'https://images.unsplash.com/photo-1521115715763-2fcaa0608e9b?auto=format&fit=crop&w=400'

interface ActivityOptionsCard {
  availableOptions: AvailableActivity[]
  activityCategory: string
}

export default function ActivityOptionsCard({ availableOptions, activityCategory }: ActivityOptionsCard) {
  const [openBooking, setOpenBooking] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<AvailableActivity | null>(null);

  const displayBooking = async (option: AvailableActivity) => {
    setOpenBooking(true)
    setSelectedActivity(option)
  }

  return <>
    <Paper sx={{ display: 'flex', flexWrap: 'wrap', margin: '1rem' }}>
      {
        availableOptions.map((option) => {
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