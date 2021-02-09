import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <ul className='navbar-nav mr-auto'>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/'>
        Главная
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/catalog'>
        Каталог
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/about'>
        О магазине
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='/contacts'>
        Контакты
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
