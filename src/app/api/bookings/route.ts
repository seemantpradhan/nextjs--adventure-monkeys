import { NextResponse } from 'next/server';
import prisma from '../prisma';

export async function POST(req: Request) {
  const { userid, bookingtype, totalamount, bookingstatus, startdate, enddate, paymentamount } = await req.json();

  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Insert booking
      const booking = await prisma.bookings.create({
        data: {
          userid,
          bookingtype,
          totalamount, 
          bookingstatus,
          startdate: new Date(startdate),
          enddate: new Date(enddate),
        },
      });
      console.log('booking ', booking);
      

      // Insert payment
      const payment = await prisma.payments.create({
        data: {
          bookingid: booking.bookingid,
          paymentamount: paymentamount,
          paymentdate: new Date(),
          paymentmethod: 'Credit Card',
          paymentstatus: 'Completed',
          createdat: new Date(startdate),
          updatedat: new Date(enddate),
        },
      });
      console.log('payment ', payment);
      return { booking, payment };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Error creating booking' }, { status: 500 });
  }
}