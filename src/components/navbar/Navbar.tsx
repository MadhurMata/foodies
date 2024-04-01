import Link from 'next/link'
import React from 'react'

const links = [
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
          <Link key={link.title} href={link.path}>{link.title}</Link>

        ))
      }
    </div>
  )
}

export default Navbar