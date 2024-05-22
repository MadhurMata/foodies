'use client';

import React, { useState } from 'react';
import { IRestaurant } from '../models/Restaurant';
export interface CoordinatesProps {
  lat: number;
  lng: number;
}

export type TypeRestaurantsRequest = 'nearRestaurants' | 'searchLocation';

interface IGlobalContextProps {
  searchType: TypeRestaurantsRequest;
  setSearchType: (searchType: TypeRestaurantsRequest) => void;
  mapCenter: CoordinatesProps;
  setMapCenter: (mapCenter: CoordinatesProps) => void;
  searchValue: IRestaurant | unknown;
  setSearchValue: (value: IRestaurant) => void;
  restaurants: IRestaurant[];
  setRestaurants: (restaurants: IRestaurant[]) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  searchType: 'nearRestaurants',
  setSearchType: () => {},
  mapCenter: { lat: 0, lng: 0 },
  setMapCenter: () => {},
  searchValue: {},
  setSearchValue: () => {},
  restaurants: [],
  setRestaurants: () => [],
});

export const GlobalContextProvider = (props) => {
  const [currentSearchType, currentSetSearchType] =
    useState<TypeRestaurantsRequest>('nearRestaurants');
  const [currentMapCenter, setCurrentMapCenter] = useState<CoordinatesProps>({
    lat: 0,
    lng: 0,
  });
  const [currentSearchValue, setCurrentSearchValue] = useState({});
  const [currentRestaurants, setCurrentRestaurants] = useState<IRestaurant[]>(
    [],
  );

  return (
    <GlobalContext.Provider
      value={{
        searchType: currentSearchType,
        setSearchType: currentSetSearchType,
        mapCenter: currentMapCenter,
        searchValue: currentSearchValue,
        setSearchValue: setCurrentSearchValue,
        restaurants: currentRestaurants,
        setMapCenter: setCurrentMapCenter,
        setRestaurants: setCurrentRestaurants,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
