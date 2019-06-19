import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classes from './Filter.module.css';

const Filter = ({ onHandleChangeFilter, filter }) => {
  return (
    <div className={classes.buttons}>
      <Button
        onClick={() => onHandleChangeFilter('all')}
        disabled={filter === 'all'}
      >
        All
      </Button>
      <Button
        onClick={() => onHandleChangeFilter('isActive')}
        disabled={filter === 'isActive'}
      >
        Active
      </Button>
      <Button
        onClick={() => onHandleChangeFilter('closed')}
        disabled={filter === 'closed'}
      >
        In the game
      </Button>
      {/* <Button
        onClick={() => onHandleChangeFilter('creatingDate')}
        disabled={filter === 'creatingDate'}
      /> */}
    </div>
  );
};
Filter.propTypes = {
  onHandleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
export default Filter;
