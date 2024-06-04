import NavbarLink, { NavbarLinkProps } from './navbarLink/NavbarLink';

const links: NavbarLinkProps[] = [
  {
    title: 'Home',
    path: '/',
    icon: '/icons/heart.svg',
  },
  {
    title: 'List',
    path: '/list',
    icon: '/icons/heart.svg',
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: '/icons/heart.svg',
  },
];

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 flex w-screen justify-around border-t bg-white p-5 sm:hidden">
        {links.map((link) => (
          <NavbarLink key={link.title} link={link} />
        ))}
      </div>
      <div className="sm:sidebar fixed bottom-0 z-20 hidden border-r bg-white p-5 sm:top-0 sm:block sm:overflow-y-auto sm:pt-20 sm:text-center lg:left-0">
        {links.map((link) => (
          <NavbarLink key={link.title} link={link} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
