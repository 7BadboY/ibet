import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const betsData = [
  {
    id: 'asdqweqherherher',
    userID: '1',
    userName: 'Bro',
    points: 100,
    type: 'random',
    betValue: '10',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
  },
  {
    id: 'asas3dkjalsdkjr',
    userID: '1',
    userName: 'Bro 2',
    points: 200,
    type: 'random',
    betValue: '1',
    exitDate: new Date().getTime() + 60000,
    creatingDate: new Date().getTime(),
  },
];

function SimpleTable() {
  const materialClasses = useStyles();

  return (
    <Paper className={materialClasses.root}>
      <Table className={materialClasses.table}>
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
          {betsData.map((row, indx) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {indx + 1}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.betValue}</TableCell>
              <TableCell align="right">{row.exitDate}</TableCell>
              <TableCell align="right">
                <Button type="button">apply</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;
