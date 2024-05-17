'use client';
import React from 'react';
import DropdownSearch from '../dropdownSearch/DropdownSearch';
import SigninButton from '../buttons/signinButton/SigninButton';

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-around bg-white px-6 py-3.5">
        <DropdownSearch />
        <SigninButton />
      </div>
    </>
  );
};

export default Header;
