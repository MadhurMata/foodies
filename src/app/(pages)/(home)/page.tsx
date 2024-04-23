'use client';

import Carousel from '@/components/carousel/Carousel';
// import useLocation from '@/hooks/useGetCurrentLocation';
import useGetNearRestaurants from './hooks/useGetNearRestaurants';
import { useGlobalContext } from '@/lib/globalContext';
import { useEffect } from 'react';

const DEFAULT_MAP_CENTER = {
  lng: -73.856077,
  lat: 40.848447,
};

export default function Home() {
  //const { location, error } = useLocation();
  const { mapCenter, nearRestaurants, setNearRestaurants } = useGlobalContext();
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;
  const restaurants = nearRestaurants;

  console.log('nearRestaurants', nearRestaurants);
  console.log('mapCenter', mapCenter);

  const {
    data = [],
    isLoading,
    error: fetchingError,
    refetch,
    status,
  } = useGetNearRestaurants({
    coordinates: center,
    radius: 10,
  });

  useEffect(() => {
    if (status === 'success') {
      console.log('status', status);
      setNearRestaurants(data);
      refetch();
    }
  }, [mapCenter, data, setNearRestaurants, refetch, status]);

  console.log('Hooooomemmmee', restaurants);

  return (
    <div className="my-auto w-full">
      {isLoading ? (
        <h1>Loading</h1>
      ) : fetchingError ? (
        <h1>Error {fetchingError.message}</h1>
      ) : (
        <Carousel items={restaurants} />
      )}
    </div>
  );
}
