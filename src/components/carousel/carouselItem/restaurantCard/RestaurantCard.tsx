import React from 'react';
import { IRestaurant } from '@/lib/models/Restaurant';

const RestaurantCard = ({ item }: { item: IRestaurant }) => {
  const { name, rating, numberRatings } = item;
  return (
    <div className="h-full w-72 rounded-lg border bg-white">
      <div>
        <div>
          <img
            className=" sm:m-h-48 h-48  w-full rounded-t-lg md:h-64"
            src="https://offloadmedia.feverup.com/valenciasecreta.com/wp-content/uploads/2020/02/13123656/138395924_120768486487962_243222459737631902_n.jpg"
            alt="Restaurant"
          />
        </div>

        <div className="flex h-full flex-col justify-between p-2">
          <div className="flex min-h-11 justify-between">
            <h5 className="mb-2 line-clamp-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              {name}
            </h5>
            <h5 className="mb-2 flex align-middle text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              {rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <p className="text-sm text-warn-400 dark:text-neutral-200">
                  ({numberRatings || '0'})
                </p>
              </span>
            </h5>
          </div>
          <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
            Asian
          </p>

          <p className="truncate text-ellipsis text-base text-neutral-600 dark:text-neutral-200">
            Plaza España 2 ghjgcbnsjklacnjscnxsmkxlcnsm
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
