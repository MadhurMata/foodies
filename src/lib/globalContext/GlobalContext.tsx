'use client';

import React, { useState } from 'react';
import { IRestaurant } from '../models/Restaurants';

export interface CoordinatesProps {
  lat: number;
  lng: number;
}

interface IGlobalContextProps {
  mapCenter: CoordinatesProps;
  nearRestaurants: IRestaurant[];
  setMapCenter: (mapCenter: CoordinatesProps) => void;
  setNearRestaurants: (restaurants: IRestaurant[]) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  mapCenter: { lat: 0, lng: 0 },
  nearRestaurants: [],
  setMapCenter: () => {},
  setNearRestaurants: () => [],
});

export const GlobalContextProvider = (props) => {
  const [currentMapCenter, setCurrentMapCenter] = useState<CoordinatesProps>({
    lat: 0,
    lng: 0,
  });
  const [currentNearRestaurants, setCurrentNearRestaurants] = useState<
    IRestaurant[]
  >([]);

  return (
    <GlobalContext.Provider
      value={{
        mapCenter: currentMapCenter,
        nearRestaurants: currentNearRestaurants,
        setMapCenter: setCurrentMapCenter,
        setNearRestaurants: setCurrentNearRestaurants,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
