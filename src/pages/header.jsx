import React from 'react'
import { NavLink } from 'react-router'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const {theme, toggleTheme} = useTheme();
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

      <button
        onClick={toggleTheme}
        className='theme-toggle'
        aria-label={`Mudar para o modo ${theme === 'ligth' ? 'escuro' : 'claro'}`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

    </div>
  )
}

export default Header
