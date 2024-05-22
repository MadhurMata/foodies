import React from 'react';
import { IRestaurant } from '@/lib/models/Restaurant';
import Icon from '@/components/icon/Icon';

function RestaurantCard({ restaurant }: { restaurant: IRestaurant }) {
  return (
    <div className="flex w-full p-4">
      <div
        className="h-20 w-20 flex-none overflow-hidden rounded bg-cover text-center"
        style={{
          backgroundImage: `url('https://tailwindcss.com/img/card-left.jpg')`,
        }}
        title="Woman holding a mug"
      ></div>
      <div className="flex w-full flex-col justify-between bg-white px-2 leading-normal">
        <div className="flex justify-between text-base font-bold text-brand-500">
          <p>
            {restaurant.rating}{' '}
            <span className="text-sm text-neutral-500">(1567)</span>
          </p>
          <Icon
            path="/icons/heart.svg"
            size={20}
            strokeColor="red"
            strokeWidth="1.5"
          />
        </div>
        <p className="flex items-center text-sm font-bold">{restaurant.name}</p>
        <p className="text-grey-darker text-xs">Japonés</p>
        <p className="text-grey-darker text-xs">visited: 29-03-2024</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
