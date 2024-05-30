'use client';
import React, { useState } from 'react';
import { Navbar, Link } from '@nextui-org/react';
import styles from './headerProfile.module.css';
import Icon from '@/components/icon/Icon';

const HeaderProfile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  // TODO: mezcla de css con tailwind, refactorizar para usar 1 solo
  const class1 =
    'block absolute h-0.5 w-5 text-neutral-500 bg-current transform transition duration-500 ease-in-out';
  const class2 = isNavOpen ? ' rotate-45' : ' -translate-y-1.5';
  const class3 = isNavOpen ? ' -rotate-45' : ' translate-y-1.5';
  return (
    <Navbar>
      <div className="flex w-screen items-center">
        <div className="justify-start">
          <button
            className="relative h-10 w-10 rounded focus:outline-none"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div className="absolute left-5 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform">
              <span className={class1 + class2}></span>
              <span className={class1 + ' opacity-0'}></span>
              <span className={class1 + class3}></span>
            </div>
          </button>
        </div>
        <div className="flex w-full justify-center pr-6">{'Madhur'}</div>
      </div>
      {isNavOpen && (
        <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
          {menuItems.map((item, index) => (
            <div className="flex items-center gap-2" key={`${item}-${index}`}>
              <Icon
                path="/icons/mail.svg"
                size={40}
                strokeColor="black"
                strokeWidth="1.5"
              />
              <Link
                className={`w-full ${
                  index === menuItems.length - 1
                    ? 'text-danger hover:text-danger-700'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </Navbar>
  );
};

export default HeaderProfile;
