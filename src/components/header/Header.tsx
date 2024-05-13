'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import NavigateButton from '@/components/navigateButton/NavigateButton';
import DropdownSearch from '../dropdownSearch/DropdownSearch';

const Header = () => {
  const pathName = usePathname();

  const buttonProps =
    pathName === '/'
      ? { label: 'Map', href: '/map' }
      : { label: 'Home', href: '/' };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 pt-3.5">
        <DropdownSearch />
        <div className="align-middle	">
          <NavigateButton label={buttonProps.label} href={buttonProps.href} />
        </div>
      </div>
      <div className="h-3 w-auto"></div>
    </>
  );
};

export default Header;
