'use client';

import MapComponent from '@/components/map/Map';
import useGetNearRestaurants from '../(home)/hooks/useGetNearRestaurants';

const location = {
  lat: -73.856077,
  lng: 40.848447,
};

const Map = () => {
  const {
    data: restaurants = [],
    isLoading,
    error,
  } = useGetNearRestaurants({
    latitude: -73.856077,
    longitude: 40.848447,
    radius: 10000,
  });
  return (
    <div>
      {isLoading ? (
        <h1>Loadinggg</h1>
      ) : error ? (
        <h1>Errorrrr Handle me</h1>
      ) : (
        <MapComponent center={location} items={restaurants} />
      )}
    </div>
  );
};

export default Map;
