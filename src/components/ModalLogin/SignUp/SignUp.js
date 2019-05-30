import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../ModalLogin.module.css';

const SignUp = ({
  onInputLogin,
  onInputPassword,
  onInputEmail,
  signUp,
  password,
  email,
}) => {
  return (
    <div
      className={[styles[`form-container`], styles[`sign-up-container`]].join(
        ` `,
      )}
    >
      <form action="#" className={styles[`modal-form`]}>
        <h1 className={styles[`modal-h1`]}>Create Account</h1>
        <TextField
          id="outlined-name"
          label="Login"
          // className={useStyles.textField}
          onChange={onInputLogin}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Email"
          // className={useStyles.textField}
          onChange={onInputEmail}
          margin="normal"
          variant="outlined"
          value={email}
        />
        <TextField
          id="outlined-name"
          label="Password"
          // className={useStyles.textField}
          onChange={onInputPassword}
          margin="normal"
          variant="outlined"
          value={password}
        />
        <Button
          color="secondary"
          // className={[classes.button, styles.ghost].join(` `)}
          id="signUp"
          onClick={signUp}
          size="large"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  onInputLogin: PropTypes.func.isRequired,
  onInputPassword: PropTypes.func.isRequired,
  onInputEmail: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
