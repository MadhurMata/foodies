'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export interface NavbarLinkProps {
    title: string;
    path: string;
}

const NavbarLink = ({link}: {link: NavbarLinkProps}) => {
    const pathName = usePathname();

    const isActive = pathName === link.path

  return (
          <Link className={`${isActive ? 'text-blue-500' : 'text-black'}`} href={link.path}>{link.title}</Link>
  )
}

export default NavbarLink