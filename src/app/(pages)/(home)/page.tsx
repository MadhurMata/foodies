'use client';

import { useEffect } from 'react';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import { useGlobalContext } from '@/lib/globalContext';
// import useLocation from '@/hooks/useGetCurrentLocation';
import Carousel from '@/components/carousel/Carousel';
import CarouselItem from '@/components/carousel/carouselItem/CarouselItem';
import RestaurantCard from '@/components/carousel/carouselItem/restaurantCard/RestaurantCard';
import heartSvg from '@/lib/icons/heart.svg';
import FoodTypeCard from '@/components/carousel/carouselItem/restaurantCard/FoodTypeCard';
import LinkComponent from '@/components/link/Link';

const FOOD_TYPE = [
  {
    type: 'Mierda pura',
    src: heartSvg,
  },
  {
    type: 'Japonesa',
    src: heartSvg,
  },
  {
    type: 'Italiana',
    src: heartSvg,
  },
  {
    type: 'Mejicana',
    src: heartSvg,
  },
  {
    type: 'Mediterranea',
    src: heartSvg,
  },
];

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
    <div className=" w-full pl-10 md:pl-20 lg:pl-40 ">
      {isLoading ? (
        <h1>Loading</h1>
      ) : fetchingError ? (
        <h1>Error {fetchingError.message}</h1>
      ) : (
        <>
          <div className="sticky left-0 top-[78px] z-10">
            <Carousel>
              {FOOD_TYPE.map((item) => (
                <CarouselItem key={item.type} paddingY="px-3">
                  <FoodTypeCard type={item.type} path={heartSvg.src} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          <div className="py-3">
            <LinkComponent
              title="Lista Completa"
              path="/list"
              styles="pl-3 text-sm text-neutral-600"
            />
            <Carousel>
              {restaurants.slice(0, 5).map((item) => (
                // CAmbiar KEY
                <CarouselItem key={item._id} paddingY="px-3">
                  <RestaurantCard item={item} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          <div className="py-3">
            <p className="pl-3 text-sm text-neutral-600">Lista Completa</p>
            <Carousel>
              {restaurants.slice(0, 5).map((item) => (
                <CarouselItem key={item._id} paddingY="px-3">
                  <RestaurantCard item={item} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
}
