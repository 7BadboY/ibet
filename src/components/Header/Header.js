import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classes from './Header.module.css';
import { connect } from 'react-redux';
import { toogleModalLogin } from '../ModalLogin/ModalLoginActions';
import { logOut } from '../ModalLogin/sessionActions';

function Header({ toogleModal, isAuthentificated, onlogOut }) {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        {!isAuthentificated ? (
          <button type="button" onClick={toogleModal}>
            Sign in/up
          </button>
        ) : (
          <button type="button" onClick={onlogOut}>
            Log out
          </button>
        )}
      </nav>
    </header>
  );
}

const mapStateToPpops = state => ({
  isAuthentificated: state.session.isAuthentificated,
});

const dispatchToProp = dispatch => ({
  toogleModal() {
    dispatch(toogleModalLogin());
  },
  onlogOut() {
    dispatch(logOut());
  },
});

Header.propTypes = {};

export default connect(
  mapStateToPpops,
  dispatchToProp,
)(Header);

Header.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  isAuthentificated: PropTypes.bool.isRequired,
  onlogOut: PropTypes.func.isRequired,
};
