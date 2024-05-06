'use client';
import React, { KeyboardEvent, useState } from 'react';
import { usePathname } from 'next/navigation';
import useSearchLocation from '@/hooks/useSearchLocation';
import Searchbar from '@/components/searchbar/Searchbar';
import AutocompleteList from '@/components/autocompleteList/AutocompleteList';
import NavigateButton from '@/components/navigateButton/NavigateButton';
import { formatedSearch } from '@/lib/utils/formatSearchLocation';
import useDropdown from '@/hooks/useDropdown';

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

  const formatedItems = formatedSearch(searchValue, searchResults);

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

  const handleSearchSelected = (search: string) => {
    setSearchValue(search);
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

  const selectItem = (index: number) => {
    setSearchValue(formatedItems[index]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <div className="relative">
          <Searchbar
            value={searchValue}
            onKeyDown={handleTabKeyDown}
            onChange={handleSearchChange}
            onClick={handleClick}
          />
          <AutocompleteList
            items={formatedItems}
            currentIndex={currentIndex}
            ref={dropdownRef}
            show={isOpen && !!formatedItems.length}
            onHandleMouseOver={handleMouseOver}
            onSelectItem={selectItem}
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
