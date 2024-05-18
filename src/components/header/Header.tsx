'use client';
import React from 'react';
import DropdownSearch from '../dropdownSearch/DropdownSearch';

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 py-3.5">
        <DropdownSearch />
      </div>
    </>
  );
};

export default Header;
