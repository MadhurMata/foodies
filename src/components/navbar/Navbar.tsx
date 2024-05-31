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
      <div className="sidebar fixed bottom-0 top-0 z-20 hidden overflow-y-auto border-r bg-white p-5 pt-20 text-center sm:block lg:left-0">
        {links.map((link) => (
          <NavbarLink key={link.title} link={link} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
