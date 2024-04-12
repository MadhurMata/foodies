import React from 'react';
import CarouselItem from './carouselItem/CarouselItem';
import RestaurantCard from './carouselItem/restaurantCard/RestaurantCard';

const Carousel = () => {
  return (
    <div className="p-auto m-auto flex flex-col bg-white">
      <div id="scrollbar" className="hide-scroll-bar flex py-5">
        <div className="ml-10 flex flex-nowrap md:ml-20 lg:ml-40 ">
          <CarouselItem paddingY="px-3">
            <RestaurantCard />
          </CarouselItem>
          <CarouselItem paddingY="px-3">
            <RestaurantCard />
          </CarouselItem>
          <CarouselItem paddingY="px-3">
            <RestaurantCard />
          </CarouselItem>
          <CarouselItem paddingY="px-3">
            <RestaurantCard />
          </CarouselItem>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
