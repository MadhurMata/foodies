import NavbarLink, { NavbarLinkProps } from './navbarLink/NavbarLink';

const links: NavbarLinkProps[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'List',
    path: '/list',
  },
  {
    title: 'Profile',
    path: '/profile',
  },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-0 flex w-screen justify-around border-t bg-light p-5">
      {links.map((link) => (
        <NavbarLink key={link.title} link={link} />
      ))}
    </div>
  );
};

export default Navbar;
