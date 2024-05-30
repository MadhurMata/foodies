import { Button, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';

const HeaderProfile = () => {
  return (
    <Navbar>
      <NavbarContent justify="center">
        <NavbarItem>UserName</NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button>Settings</Button>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderProfile;
