import React from 'react';
import CarouselItem from './carouselItem/CarouselItem';
import RestaurantCard from './carouselItem/restaurantCard/RestaurantCard';
import { IRestaurant } from '@/lib/models/Restaurants';

const Carousel = ({ items }: { items: IRestaurant[] }) => {
  return (
    <div className="p-auto m-auto flex flex-col bg-white">
      <div id="scrollbar" className="hide-scroll-bar flex py-5">
        <div className="ml-10 flex flex-nowrap md:ml-20 lg:ml-40 ">
          {items.map((item) => (
            <CarouselItem key={item.id} paddingY="px-3">
              <RestaurantCard item={item} />
            </CarouselItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
