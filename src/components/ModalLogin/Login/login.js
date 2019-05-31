import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from '../ModalLogin.module.css';

const Login = ({
  onInputPassword,
  onInputEmail,
  signIn,
  isLoaderShowed,
  email,
  password,
  err,
  lang,
}) => {
  return (
    <div
      className={[styles[`form-container`], styles[`sign-in-container`]].join(
        ` `,
      )}
    >
      <form action="#" className={styles[`modal-form`]}>
        <h1 className={styles[`modal-h1`]}>{lang.text.signInHeader}</h1>

        <TextField
          error={!!err.email}
          id="outlined-name"
          label={lang.text.email}
          value={email}
          onChange={onInputEmail}
          helperText={err.email}
          margin="normal"
          variant="outlined"
        />

        <TextField
          error={!!err.password}
          id="outlined-name"
          label={lang.text.password}
          value={password}
          onChange={onInputPassword}
          helperText={err.password}
          margin="normal"
          variant="outlined"
        />

        <Button
          color="default"
          id="signUp"
          onClick={() => alert('Sorry about that :(')}
          size="small"
        >
          {lang.text.forgot}
        </Button>
        <Button color="secondary" id="signUp" onClick={signIn} size="large">
          {lang.text.signInButton}
        </Button>
      </form>
      {isLoaderShowed && <i className={styles.loader} />}
    </div>
  );
};

export default Login;

Login.propTypes = {
  onInputPassword: PropTypes.func.isRequired,
  onInputEmail: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  isLoaderShowed: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  err: PropTypes.shape({}).isRequired,
  lang: PropTypes.shape({}).isRequired,
};
