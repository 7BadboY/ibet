import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Clock from 'react-live-clock';
import classes from './Header.module.css';

const isAuthentificated = false;

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation__top}>
        <div className={classes.timezone}>
          <IconButton>
            <SvgIcon>
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
            </SvgIcon>
            <Clock
              className={classes.navInfo}
              format="LT"
              ticking
              timezone="Europe/Kiev"
            />
          </IconButton>
        </div>
        <div className={classes.userPoint}>
          {!isAuthentificated && (
            <>
              <NavLink className={classes.navInfo} exact to="/">
                <IconButton>
                  <SvgIcon>
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                  </SvgIcon>
                  <Typography className={classes.navInfo} exact to="/">
                    Registration
                  </Typography>
                </IconButton>
              </NavLink>
              <NavLink className={classes.navInfo} exact to="/">
                <IconButton>
                  <SvgIcon>
                    <path d="M19,21V19H15V17H19V15L22,18L19,21M10,4A4,4 0 0,1 14,8A4,4 0 0,1 10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,14C11.15,14 12.25,14.12 13.24,14.34C12.46,15.35 12,16.62 12,18C12,18.7 12.12,19.37 12.34,20H2V18C2,15.79 5.58,14 10,14Z" />
                  </SvgIcon>
                  <Typography className={classes.navInfo} exact to="/">
                    Login
                  </Typography>
                </IconButton>
              </NavLink>
            </>
          )}
          {isAuthentificated && <span>logo</span>}
        </div>
      </nav>
      <nav className={classes.navigation__bottom}>
        <div className={classes.logoString}>
          <div className={classes.navigation__logo}>
            <NavLink className={classes.navInfo} exact to="/">
              iBET
            </NavLink>
          </div>
          <div className={classes.navigation__items}>
            <NavLink className={classes.navInfo} exact to="/">
              Contact us
            </NavLink>
            <NavLink className={classes.navInfo} exact to="/">
              Help
            </NavLink>
            <NavLink className={classes.navInfo} to="/about">
              About
            </NavLink>
          </div>
        </div>
        <div className={classes.navigation__greet}>
          <h2 className={classes.greeting}>WELCOME!</h2>
          <div className={classes.headerButton}>
            <Button>Active games</Button>
            <Button>Create new game</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
