'use client';

import React, { useState } from 'react';
export interface CoordinatesProps {
  lat: number;
  lng: number;
}

export type TypeRestaurantsRequest = 'nearRestaurants' | 'searchLocation';

interface IGlobalContextProps {
  searchLocation: string;
  setSearchLocation: (searchLocation: string) => void;
  mapCenter: CoordinatesProps;
  setMapCenter: (mapCenter: CoordinatesProps) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  searchLocation: '',
  setSearchLocation: () => {},
  mapCenter: { lat: 0, lng: 0 },
  setMapCenter: () => {},
});

export const GlobalContextProvider = (props) => {
  const [currentSearchLocation, currentSetSearchLocation] =
    useState<string>('');
  const [currentMapCenter, setCurrentMapCenter] = useState<CoordinatesProps>({
    lat: 0,
    lng: 0,
  });

  return (
    <GlobalContext.Provider
      value={{
        searchLocation: currentSearchLocation,
        setSearchLocation: currentSetSearchLocation,
        mapCenter: currentMapCenter,
        setMapCenter: setCurrentMapCenter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
