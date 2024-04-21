'use client';

import Carousel from '@/components/carousel/Carousel';
// import useLocation from '@/hooks/useGetCurrentLocation';
import useGetNearRestaurants from './hooks/useGetNearRestaurants';

export default function Home() {
  //const { location, error } = useLocation();

  const {
    data: restaurants = [],
    isLoading,
    error: fetchingError,
  } = useGetNearRestaurants({
    latitude: -73.856077,
    longitude: 40.848447,
    radius: 10000,
  });

  return (
    <div className="my-auto w-full">
      {/* {restaurants.map((restaurant, i) => {
        return (
          <div key={i}>
            <h1>{restaurant.name}</h1>
          </div>
        );
      })} */}
      {isLoading ? (
        <h1>Loading</h1>
      ) : fetchingError ? (
        <h1>Error {fetchingError.message}</h1>
      ) : (
        <Carousel items={restaurants} />
      )}

      {/* // <Carousel />
      // <Carousel />
      // <Carousel /> */}
    </div>
  );
}
