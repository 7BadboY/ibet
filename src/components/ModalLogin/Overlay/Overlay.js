import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import styles from '../ModalLogin.module.css';
import LanguageSwitch from '../LanguageSwitch/LaguageSwitch';

const Overlay = ({ toogleLogin, toogleLang, lang, isEng }) => {
  return (
    <div className={styles[`overlay-container`]}>
      <LanguageSwitch toogleLang={toogleLang} isEng={isEng} />
      <div className={styles.overlay}>
        <div
          className={[styles[`overlay-panel`], styles[`overlay-left`]].join(
            ` `,
          )}
        >
          <h1 className={styles[`modal-h1`]}>{lang.text.textHeaderUp}</h1>
          <p className={styles[`modal-p`]}>{lang.text.textContentUp}</p>
          <Button
            color="primary"
            id="signUp"
            onClick={toogleLogin}
            size="large"
          >
            {lang.text.signInButton}
          </Button>
        </div>
        <div
          className={[styles[`overlay-panel`], styles[`overlay-right`]].join(
            ` `,
          )}
        >
          <h1 className={styles[`modal-h1`]}>{lang.text.textHeaderIn}</h1>
          <p className={styles[`modal-p`]}>{lang.text.textContentIn}</p>
          <Button
            color="primary"
            id="signUp"
            onClick={toogleLogin}
            size="large"
          >
            {lang.text.signUpButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  toogleLogin: PropTypes.func.isRequired,
  toogleLang: PropTypes.func.isRequired,
  lang: PropTypes.shape({}).isRequired,
  isEng: PropTypes.bool.isRequired,
};

export default Overlay;
