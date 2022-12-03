import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';

const Navbar = ({ isfade }) => {
  const [isNavToggle, setIsNavToggle] = useState(false);

  return (
    <nav
      aria-label='Primary Navigation'
      className={`nav--primary ${isfade && 'nav--bg'} `}
    >
      <div className='container flex'>
        <NavLink to='/'>
          <img
            className='nav__logo'
            src={Logo}
            alt='Sleepstiq, sleepstiq logo, brand icon for Sleeptiq'
          />
        </NavLink>

        <button
          className='nav__toggle'
          aria-label='navigation toggle'
          aria-controls='navigation menu'
          data-toggle={isNavToggle}
          onClick={() => setIsNavToggle((prev) => !prev)}
        >
          <div className='bg-blue-dark'></div>
          <div className='bg-blue-dark'></div>
          <div className='bg-blue-dark'></div>
        </button>

        <ul
          className='nav__menu flex'
          aria-label='navigation menu'
          aria-expanded={isNavToggle}
        >
          <li>
            <NavLink to='/' onClick={() => setIsNavToggle(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setIsNavToggle(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' onClick={() => setIsNavToggle(false)}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/faqs' onClick={() => setIsNavToggle(false)}>
              FAQs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
