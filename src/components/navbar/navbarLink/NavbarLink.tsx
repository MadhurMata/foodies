'use client';

import Icon from '@/components/icon/Icon';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavbarLinkProps {
  title: string;
  path: string;
  icon: string;
}

const NavbarLink = ({ link }: { link: NavbarLinkProps }) => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const isActive = pathName === link.path;

  const userName = session?.user._doc.firstName;
  const linkPath = link.path === '/profile' ? `/${userName}` : link.path;
  return (
    <Link
      className={`${isActive ? 'text-blue-500' : 'text-black'}`}
      href={linkPath}
    >
      <Icon
        path={link.icon}
        size={30}
        strokeColor="grey"
        strokeWidth={isActive ? '3' : '1.5'}
      />
    </Link>
  );
};

export default NavbarLink;
