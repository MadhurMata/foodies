import NavbarLink, { NavbarLinkProps } from './navbarLink/NavbarLink'

const links: NavbarLinkProps[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Map',
    path: '/map',
  },
  {
    title: 'Profile',
    path: '/profile',
  },
]

const Navbar = () => {
  return (
    <div className='flex justify-around sticky bottom-0 p-5'>
      {
        links.map(link => (
          <NavbarLink key={link.title} link={link} />
        ))
      }
    </div>
  )
}

export default Navbar