'use client';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useSearchLocation from '@/hooks/useSearchLocation';
import Searchbar from '@/components/searchbar/Searchbar';
import AutocompleteList from '@/components/autocompleteList/AutocompleteList';
import NavigateButton from '@/components/navigateButton/NavigateButton';
import useDropdown from '@/hooks/useDropdown';
import { ISearchLocation } from '@/lib/models/SearchLocation';
import useGetRestaurants from '@/hooks/useGetRestaurants';
import { useGlobalContext } from '@/lib/globalContext';

// Esto lo trae el User como favorita
export const FAVOURITE_LOCATION = {
  id: '663b9d7f3f2db9062b96998c',
  buttonLabel: 'Russafa',
  searchLabel: 'Russafa, Valencia, España',
  location: {
    lng: -0.3736955089500449,
    lat: 39.46119052871859,
  },
};

const Header = () => {
  const { setSearchType, setMapCenter, setRestaurants } = useGlobalContext();
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const { data: newRestaurants = [], refetch: refetchGetRestaurants } =
    useGetRestaurants({
      typeRestaurantsRequest: 'searchLocation',
      searchLocationId: FAVOURITE_LOCATION.id,
      enable: isEnabled,
    });

  const buttonProps =
    pathName === '/'
      ? { label: 'Map', href: '/map' }
      : { label: 'Home', href: '/' };

  const { data: searchResults = [], refetch } = useSearchLocation({
    searchInput: searchValue,
  });

  const filterSearch = (searchValue: string, items: ISearchLocation[]) => {
    const formatedSerarch = searchValue?.toLowerCase();
    return items.filter((item) => {
      const hasKey = item.type && item.type in item;
      if (hasKey && item[item.type]?.toLowerCase().includes(formatedSerarch)) {
        return true;
      }
      return false;
    });
  };

  const formatedItems = filterSearch(searchValue, searchResults);

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
    if (event.target.value) await refetch();
    if (event.target.value) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const {
    dropdownRef,
    currentIndex,
    isOpen,
    setIsOpen,
    handleKeyDown,
    handleMouseOver,
  } = useDropdown({
    items: formatedItems,
    onSelected: ({ item }) => handleSearchSelected(item),
  });

  const handleTabKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      setIsOpen(false);
    }
    handleKeyDown(event);
  };

  const handleSearchSelected = async (item?: ISearchLocation) => {
    setSearchType('searchLocation');
    setIsEnabled(true);
    refetchGetRestaurants();
    setIsOpen(false);

    if (item) {
      const text = item.neighborhood
        ? item.neighborhood + ', ' + item.city + ', ' + item.country
        : item.city
          ? item.city + ', ' + item.country
          : item.country;

      setSearchValue(text);
    } else {
      setSearchValue(FAVOURITE_LOCATION.searchLabel);
    }
  };

  useEffect(() => {
    if (isEnabled && newRestaurants) {
      setRestaurants(newRestaurants);
      setMapCenter(FAVOURITE_LOCATION.location);
      setIsEnabled(false);
    }
  }, [newRestaurants, isEnabled, setMapCenter, setRestaurants]);

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <div className="relative">
          <Searchbar
            value={searchValue}
            buttonLabel={FAVOURITE_LOCATION.buttonLabel}
            onKeyDown={handleTabKeyDown}
            onChange={handleSearchChange}
            onSelectItem={handleSearchSelected}
          />
          <AutocompleteList
            items={formatedItems}
            currentIndex={currentIndex}
            ref={dropdownRef}
            show={isOpen && !!searchResults.length}
            onHandleMouseOver={handleMouseOver}
            onSelectItem={handleSearchSelected}
          />
        </div>
        <div className="align-middle	">
          <NavigateButton label={buttonProps.label} href={buttonProps.href} />
        </div>
      </div>
      <div className="h-3 w-auto"></div>
    </>
  );
};

export default Header;
