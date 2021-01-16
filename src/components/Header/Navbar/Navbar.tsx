import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/main.html'>
          Главная
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/catalog.html'>
          Каталог
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/about.html'>
          О магазине
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/contacts.html'>
          Контакты
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar