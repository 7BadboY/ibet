import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classes from './Header.module.css';

function Header() {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
