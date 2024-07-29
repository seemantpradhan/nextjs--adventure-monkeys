import CategoryDetails from '@/app/activities/[category]/CategoryDetails';
import ActivityOptionsCard from './ActivityOptionsCard';

export interface AvailableOption   {
  caravanid: number
  model: string
  make: string
  year: number
  capacity: number
  description: string
  priceperday: number
  available: boolean
  createdat: string
  updatedat: string
}

async function fetchCaravans() {
  const response = await fetch('http://localhost:3001/api/caravans')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}

export default async function Page({ params }: { params: { category: string } }) {
  const {category} = params
  let availableOptions
  if (category === 'Caravans'){
    availableOptions = await fetchCaravans()
  }

  return <>
    <CategoryDetails category={category} />
    <ActivityOptionsCard availableOptions={availableOptions} activityCategory={category}/>
  </>
}