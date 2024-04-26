import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pl-8 pr-8 pt-6 font-bold bg-[#282c34] text-teal-50'>
      <h1>Nav Logo</h1>
      <nav >
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <a href='/resume'>
        Resume
      </a>
    </div>
  )
}

export default Navbar