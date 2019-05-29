import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  button: {
    margin: '20',
  },
  input: {
    borderColor: 'red',
  },
}));

function Home(props) {
  const materialClasses = useStyles();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          alert('submit');
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          className={materialClasses.input}
          onChange={e => console.log(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <Button
          onClick={() => alert('click')}
          className={materialClasses.button}
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
}

Home.propTypes = {};

export default connect(state => state)(Home);
