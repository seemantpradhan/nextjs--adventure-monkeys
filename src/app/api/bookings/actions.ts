'use server'
import { AvailableActivity } from "@/app/activities/[category]/page"

export async function createBooking(activity: AvailableActivity) {
    'use server'
    const {} = activity
    const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
        body: JSON.stringify({
            userid: 1,
            bookingtype: 'Caravan',
            paymentamount: 10000,
            totalamount: 10000,
            bookingstatus: 'Confirmed',
            startdate: '12/07/2024', //format- 2024-12-06T18:30:00.000Z
            enddate: '12/09/2024',
        }),
    })

    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return response.json()
}