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
    path: '/userName',
  },
];

const Navbar = () => {
  return (
    <div className="sticky bottom-0 flex justify-around border-t bg-light p-5">
      {links.map((link) => (
        <NavbarLink key={link.title} link={link} />
      ))}
    </div>
  );
};

export default Navbar;
