import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
// import styles from './FeedbackForm.module.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function TextFields({ onChange, onSubmit }) {
  const classes = useStyles();

  return (
    <>
      <div className="adressInfo">
        <h2 className="adressTitle">Nearest Office:</h2>
        <p className="adressText">
          Kyiv <br /> Bankova str. 123 <br /> 5441359{' '}
        </p>
      </div>

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          onChange={onChange}
          id="standard-name"
          label="Name"
          margin="normal"
          required
          name="name"
        />
        <TextField
          onChange={onChange}
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          name="mail"
          required
        />
        <TextField
          onChange={onChange}
          id="outlined-dense"
          label="Country"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          name="country"
        />
        <TextField
          onChange={onChange}
          id="outlined-full-width"
          label="Feedback"
          style={{ margin: 8 }}
          placeholder="Your suggestions"
          helperText="Thank you for your time !"
          fullWidth
          margin="normal"
          variant="outlined"
          name="feedback"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Fab
          onClick={onSubmit}
          variant="extended"
          aria-label="Delete"
          className={classes.fab}
        >
          <NavigationIcon className={classes.extendedIcon} />
          MAIL US
        </Fab>
      </form>
    </>
  );
}

TextFields.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TextFields;
