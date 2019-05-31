import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// import { searchUser } from './tableAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './CustomTable.module.css';
import Filter from '../Filter/Filter';
import { enterGame } from './tableAction';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// }));

class SimpleTable extends Component {
  state = {
    active: this.props.active,
    currentEnter: '',
    filter: 'all',
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentEnter } = this.state;
    const { active } = this.props;
    if (prevState.currentEnter !== currentEnter) {
      this.updateState();
    }

    if (prevProps.active !== active) {
      this.updateProps();
    }
  }

  updateProps = () => {
    this.setState({ active: this.props.active });
  };

  handleChange = e => {
    if (typeof this.state.currentEnter === 'string') {
      this.setState({
        currentEnter: e.target.value,
      });
    }
  };

  updateState = () => {
    const newTable = [];
    const regObj = new RegExp(this.state.currentEnter, 'gi');
    this.props.active.forEach(el => {
      if (el.userName.match(regObj)) {
        newTable.push(el);
      }
    });
    this.setState({
      active: newTable,
    });
  };

  onHandleActiveGame = id => {
    this.props.enterGame(id);
  };

  onHandleChangeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { active, filter } = this.state;
    // const { enterGame } = this.props;
    let filtredActive;
    if (filter === 'closed') {
      filtredActive = active.filter(el => el.isActive);
    } else if (filter === 'isActive') {
      filtredActive = active.filter(el => !el.isActive);
    } else {
      filtredActive = active;
    }
    return (
      <Paper className={classes.root}>
        <Filter
          filter={filter}
          onHandleChangeFilter={this.onHandleChangeFilter}
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.input}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">User name</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Bet value</TableCell>
              <TableCell align="right">Exit date</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtredActive.map((row, indx) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {indx + 1}
                </TableCell>
                <TableCell align="right">{row.userName}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.betValue}</TableCell>
                <TableCell align="right">{row.exitDate}</TableCell>
                <TableCell align="right">
                  <Button
                    type="button"
                    onClick={() => this.onHandleActiveGame(row.id)}
                    disabled={row.isActive === true}
                  >
                    apply
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  active: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapDispatchToProps = dispatch => ({
  enterGame: id => dispatch(enterGame(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SimpleTable);
