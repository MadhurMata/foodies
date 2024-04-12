'use client';

import Carousel from '@/components/carousel/Carousel';
import useGetCurrentLocation from '@/hooks/useGetCurrentLocation';
//import { promises as fs } from 'fs';

// const fetchRestaurants = async () => {
//   const file = await fs.readFile(
//     process.cwd() + '/src/api/restaurantsApi/restaurants.json',
//     'utf8',
//   );
//   return JSON.parse(file).slice(0, 5);
// };

export default function Home() {
  //const restaurants = await fetchRestaurants();
  const { location, error } = useGetCurrentLocation();
  console.log('location', location);
  console.log('error', error);

  return (
    <div className="my-auto w-full">
      {/* {restaurants.map((restaurant, i) => {
        return (
          <div key={i}>
            <h1>{restaurant.name}</h1>
          </div>
        );
      })} */}
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}
