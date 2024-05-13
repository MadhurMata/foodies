'use client';

import Carousel from '@/components/carousel/Carousel';
import useGetRestaurants from '@/hooks/useGetRestaurants';
// import useLocation from '@/hooks/useGetCurrentLocation';
import { useGlobalContext } from '@/lib/globalContext';
import { useEffect } from 'react';

export const DEFAULT_MAP_CENTER = {
  lat: 39.4950118,
  lng: -0.3950138,
};

export default function Home() {
  //const { location, error } = useLocation();
  const { mapCenter, restaurants, setRestaurants } = useGlobalContext();
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;

  const {
    data = [],
    isLoading,
    error: fetchingError,
    refetch,
    status,
  } = useGetRestaurants({
    typeRestaurantsRequest: 'nearRestaurants',
    coordinates: center,
    radius: 1,
  });

  useEffect(() => {
    if (status === 'success') {
      setRestaurants(data);
      refetch();
    }
  }, [mapCenter, data, setRestaurants, refetch, status]);

  return (
    <div className="my-auto w-full">
      {isLoading ? (
        <h1>Loading</h1>
      ) : fetchingError ? (
        <h1>Error {fetchingError.message}</h1>
      ) : (
        <Carousel items={restaurants.slice(0, 5)} />
      )}
    </div>
  );
}
