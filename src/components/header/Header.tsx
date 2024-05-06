'use client';
import React, { KeyboardEvent, useState } from 'react';
import { usePathname } from 'next/navigation';
import useSearchLocation from '@/hooks/useSearchLocation';
import Searchbar from '@/components/searchbar/Searchbar';
import AutocompleteList from '@/components/autocompleteList/AutocompleteList';
import NavigateButton from '@/components/navigateButton/NavigateButton';
import useDropdown from '@/hooks/useDropdown';
import { ISearchLocation } from '@/lib/models/SearchLocation';

export const FAVOURITE_LOCATION = {
  id: 'xxxx',
  searchBy: 'city',
  searchWord: 'Valencia',
  buttonLabel: 'Valencia',
  searchLabel: 'Valencia, España',
};

const Header = () => {
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState('');

  const buttonProps =
    pathName === '/'
      ? { label: 'Map', href: '/map' }
      : { label: 'Home', href: '/' };

  const { data: searchResults = [], refetch } = useSearchLocation({
    searchInput: searchValue,
  });

  //const formatedItems = formatedSearch(searchValue, searchResults);
  const filterSearch = (searchValue: string, items: ISearchLocation[]) => {
    const formatedSerarch = searchValue.toLowerCase();

    return items.filter((item) => {
      if (
        item.neighborhood &&
        item.neighborhood.toLowerCase().includes(formatedSerarch)
      ) {
        return true;
      } else if (
        item.neighborhood &&
        !item.neighborhood.toLowerCase().includes(formatedSerarch)
      ) {
        return false;
      } else if (
        item.city &&
        item.city.toLowerCase().includes(formatedSerarch)
      ) {
        return true;
      } else if (
        item.city &&
        !item.city.toLowerCase().includes(formatedSerarch)
      ) {
        return false;
      } else if (
        item.country &&
        item.country.toLowerCase().includes(formatedSerarch)
      ) {
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

  const handleSearchSelected = (item: ISearchLocation) => {
    const text = item.neighborhood
      ? item.neighborhood + ', ' + item.city + ', ' + item.country
      : item.city
        ? item.city + ', ' + item.country
        : item.country;

    setSearchValue(text);
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

  const handleClick = () => {
    setSearchValue(FAVOURITE_LOCATION.searchLabel);
    setIsOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <div className="relative">
          <Searchbar
            value={searchValue}
            buttonLabel={FAVOURITE_LOCATION.buttonLabel}
            onKeyDown={handleTabKeyDown}
            onChange={handleSearchChange}
            onClick={handleClick}
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
