import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AvailableActivity } from './page';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createBooking } from '@/app/api/bookings/actions'

interface ScrollDialog {
  open: boolean
  setOpen: Function
  selectedActivity: AvailableActivity | null
}

export default function ScrollDialog({ open, setOpen, selectedActivity }: ScrollDialog) {
  const { caravanid, model, capacity, available, description, priceperday } = selectedActivity || {}

  const handleClose = () => {
    setOpen(false);
  };

  const bookActivity = async () => {
    if (selectedActivity) {
      const booking = await createBooking(selectedActivity)
      setOpen(false);
      console.log('confirmed booking', booking);
    }
    else {
      console.error('No activity selected');
    }
  }

  // const descriptionElementRef = React.useRef<HTMLElement>(null);
  // React.useEffect(() => {
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" color='secondary.main'>Booking:  {`${caravanid} - ${model}`}</DialogTitle>
        <DialogContent dividers={true}>
          {/* <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          > */}
          <Rating name="read-only" value={4.3} size="small" readOnly />
          <Typography variant="body2" color="text.secondary">
            {description} {description} {description} {description} {description}{description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Capacity-${capacity}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Price per day- ${priceperday}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {available ? 'Currently available, book now!' : 'Sorry! Not Available.'}
          </Typography>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!available} color='secondary' variant='outlined' onClick={bookActivity}>Book</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}