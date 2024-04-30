'use client';
import React from 'react';

import NavigateButton from '../navigateButton/NavigateButton';
import { usePathname } from 'next/navigation';
import Searchbar from '../searchbar/Searchbar';
import AutocompleteList from '../autocompleteList/AutocompleteList';
import { useState } from 'react';
import useOutsideHandler from '@/hooks/useOutsideHandler';

const Header = () => {
  const pathName = usePathname();
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setOpen] = useState(false);

  const buttonProps =
    pathName === '/'
      ? { label: 'Map', href: '/map' }
      : { label: 'Home', href: '/' };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true);
    setSearchValue(event.target.value);
  };

  const containerRef = useOutsideHandler(() => {
    if (isOpen) {
      setOpen(false);
    }
  }) as React.RefObject<HTMLDivElement>;

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <div className="relative">
          <Searchbar value={searchValue} onChange={handleSearchChange} />
          <AutocompleteList ref={containerRef} show={isOpen} />
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
