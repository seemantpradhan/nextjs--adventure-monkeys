// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Use the `Post` type we've already defined in `postsSlice`,
// and then re-export it for ease of use
import type { AvailableActivity } from '@/app/activities/[category]/page'
export type { AvailableActivity }

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getActivityOptions` endpoint is a "query" operation that returns data.
    // The return value is a `AvailableActivity[]` array, and it takes one arguments, (void for no argument).
    getActivityOptions: builder.query<AvailableActivity[], string>({
      // The URL for the request is '/api/caravans'
      query: (activityCategory) => `/${activityCategory}`
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetActivityOptionsQuery } = apiSlice