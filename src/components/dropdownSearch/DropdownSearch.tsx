import React, { KeyboardEvent, useState } from 'react';
import { useGlobalContext } from '@/lib/globalContext';
import useDropdown from '@/hooks/useDropdown';
import useSearchLocation from '@/hooks/useSearchLocation';

import Searchbar from '@/components/searchbar/Searchbar';
import AutocompleteList from '@/components/autocompleteList/AutocompleteList';
import { ISearchLocation } from '@/lib/models/SearchLocation';

// Esto lo trae el User como favorita
export const FAVOURITE_LOCATION: ISearchLocation = {
  id: '663b9d7f3f2db9062b96998c',
  type: 'neighborhood',
  country: 'España',
  city: 'Valencia',
  neighborhood: 'Russafa',
  location: {
    type: 'Point',
    coordinates: [39.46119052871859, -0.3736955089500449],
  },
};

function DropdownSearch() {
  const [searchValue, setSearchValue] = useState('');
  const { setSearchType, setMapCenter } = useGlobalContext();

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

  const handleSearchSelected = async (item: ISearchLocation) => {
    setSearchType('searchLocation');
    setMapCenter({
      lat: item.location.coordinates[0],
      lng: item.location.coordinates[1],
    });
    setIsOpen(false);

    const text = item.neighborhood
      ? item.neighborhood + ', ' + item.city + ', ' + item.country
      : item.city
        ? item.city + ', ' + item.country
        : item.country;

    setSearchValue(text);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      setIsOpen(false);
    }
    handleKeyDown(event);
  };

  return (
    <div className="relative">
      <Searchbar
        value={searchValue}
        buttonLabel={FAVOURITE_LOCATION[FAVOURITE_LOCATION.type]}
        onKeyDown={handleTabKeyDown}
        onChange={handleSearchChange}
        onSelectItem={() => handleSearchSelected(FAVOURITE_LOCATION)}
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
  );
}

export default DropdownSearch;
