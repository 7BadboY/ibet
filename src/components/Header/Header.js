import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classes from './Header.module.css';
import { connect } from 'react-redux';
import { toogleModalLogin } from '../ModalLogin/ModalLoginActions';

function Header({ toogleModal }) {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <button type="button" onClick={toogleModal}>
          Sign in/up
        </button>
      </nav>
    </header>
  );
}

const dispatchToProp = dispatch => ({
  toogleModal() {
    dispatch(toogleModalLogin());
  },
});

Header.propTypes = {};

export default connect(
  null,
  dispatchToProp,
)(Header);

Header.propTypes = {
  toogleModal: PropTypes.func.isRequired,
};
