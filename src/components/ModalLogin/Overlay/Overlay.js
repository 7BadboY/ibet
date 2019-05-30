import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import styles from '../ModalLogin.module.css';
import LanguageSwitch from '../LanguageSwitch/LaguageSwitch';

const Overlay = ({ toogleLogin, toogleLang }) => {
  return (
    <div className={styles[`overlay-container`]}>
      <LanguageSwitch toogleLang={toogleLang} />
      <div className={styles.overlay}>
        <div
          className={[styles[`overlay-panel`], styles[`overlay-left`]].join(
            ` `,
          )}
        >
          <h1 className={styles[`modal-h1`]}>Welcome Back!</h1>
          <p className={styles[`modal-p`]}>
            To keep connected with us please login with your personal info
          </p>
          <Button
            color="primary"
            // className={[classes.button, styles.ghost].join(` `)}
            id="signUp"
            onClick={toogleLogin}
            size="large"
          >
            Sign in
          </Button>
        </div>
        <div
          className={[styles[`overlay-panel`], styles[`overlay-right`]].join(
            ` `,
          )}
        >
          <h1 className={styles[`modal-h1`]}>Hello, Friend!</h1>
          <p className={styles[`modal-p`]}>
            Enter your personal details and start journey with us
          </p>
          <Button
            color="primary"
            // className={[classes.button, styles.ghost].join(` `)}
            id="signUp"
            onClick={toogleLogin}
            size="large"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  toogleLogin: PropTypes.func.isRequired,
  toogleLang: PropTypes.func.isRequired,
};

export default Overlay;
