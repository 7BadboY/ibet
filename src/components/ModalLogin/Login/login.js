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
}) => {
  return (
    <div
      className={[styles[`form-container`], styles[`sign-in-container`]].join(
        ` `,
      )}
    >
      <form action="#" className={styles[`modal-form`]}>
        <h1 className={styles[`modal-h1`]}>Sign in</h1>

        {!err.email ? (
          <TextField
            id="outlined-name"
            label="Email"
            value={email}
            // className={useStyles.textField}
            onChange={onInputEmail}
            margin="normal"
            variant="outlined"
          />
        ) : (
          <TextField
            error
            id="filled-error"
            label="Email"
            value={email}
            helperText={err.email}
            // className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={onInputEmail}
          />
        )}

        {!err.password ? (
          <TextField
            id="outlined-name"
            label="Password"
            value={password}
            // className={useStyles.textField}
            onChange={onInputPassword}
            margin="normal"
            variant="outlined"
          />
        ) : (
          <TextField
            error
            id="filled-error"
            label="Password"
            value={password}
            helperText={err.password}
            // className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={onInputPassword}
          />
        )}

        <Button
          color="default"
          // className={[classes.button, styles.ghost].join(` `)}
          id="signUp"
          onClick={() => alert('Sorry about that :(')}
          size="small"
        >
          Forgot your password?
        </Button>
        <Button
          color="secondary"
          // className={[classes.button, styles.ghost].join(` `)}
          id="signUp"
          onClick={signIn}
          size="large"
        >
          Sign in
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
};
