"use server";

import { promises as fs } from 'fs';

import Map from '@/components/map/Map';

const fetchRestaurants = async () => {
  const file = await fs.readFile(process.cwd() + '/src/api/restaurantsApi/restaurants.json', 'utf8');
  return JSON.parse(file).slice(0, 5);
}


export default async function Home() {
  const restaurants = await fetchRestaurants();
  
  if(!restaurants) return <h1>No data</h1>

  return (
    <div>
      {
      restaurants.map((restaurant, i) => {
        return (
          <div key={i}>
            <h1>{restaurant.name}</h1>
          </div>
        )
      })
      }
      <Map />
    </div>
  );
}
