import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='top-nav'>
      <NavLink to='/' className='logo-title'>
        <img src='/log' alt='Logo' />
        <span>Crypto Dash</span>
      </NavLink>

      <nav className='nav-links'>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>

    </div>
  )
}

export default Header
