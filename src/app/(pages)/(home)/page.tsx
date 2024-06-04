'use client';

import useGetRestaurants from '@/hooks/useGetRestaurants';
import { useGlobalContext } from '@/lib/globalContext';
import Carousel from '@/components/carousel/Carousel';
import CarouselItem from '@/components/carousel/carouselItem/CarouselItem';
import RestaurantCard from '@/components/carousel/carouselItem/restaurantCard/RestaurantCard';
import FoodTypeCard from '@/components/carousel/carouselItem/restaurantCard/FoodTypeCard';
import LinkComponent from '@/components/link/Link';

const FOOD_TYPE = [
  {
    type: 'Mierda pura',
    src: '/icons/heart.svg',
  },
  {
    type: 'Japonesa',
    src: '/icons/heart.svg',
  },
  {
    type: 'Italiana',
    src: '/icons/heart.svg',
  },
  {
    type: 'Mejicana',
    src: '/icons/heart.svg',
  },
  {
    type: 'Mediterranea',
    src: '/icons/heart.svg',
  },
];

export const DEFAULT_MAP_CENTER = {
  lat: 39.4950118,
  lng: -0.3950138,
};

export const DEFAULT_SEARCH_LOCATION_ID = '663b9d7f3f2db9062b969990';

export default function Home() {
  const { mapCenter, searchLocation } = useGlobalContext();
  const center = mapCenter.lat === 0 ? DEFAULT_MAP_CENTER : mapCenter;

  const {
    data: restaurants,
    isLoading,
    error: fetchingError,
  } = useGetRestaurants({
    searchLocationId: searchLocation,
    coordinates: center,
    radius: 1,
  });

  return (
    <div className=" w-full pl-10 sm:pl-20 lg:pl-40">
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
                  <FoodTypeCard type={item.type} path={item.src} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          <div className="z-0 flex flex-col gap-2 py-3">
            <LinkComponent
              title="Lista Completa"
              path="/list"
              styles="pl-3 text-sm text-neutral-600"
            />
            <Carousel>
              {restaurants?.slice(0, 5).map((item) => (
                <CarouselItem key={item._id} paddingY="px-3">
                  <RestaurantCard item={item} />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          <div className="z-0 flex flex-col gap-2 py-3">
            <LinkComponent
              title="Lista Completa"
              path="/list"
              styles="pl-3 text-sm text-neutral-600"
            />{' '}
            <Carousel>
              {restaurants?.slice(0, 5).map((item) => (
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
