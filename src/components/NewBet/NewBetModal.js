import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import NewBet from './NewBet';
import CategorySelector from './CategorySelector';
import styles from './NewBet.module.css';

class NewBetModal extends Component {
  state = {
    isModalOpen: false,
    category: '',
    typeBet: ['random', 'cazino', 'football'],
    pointValue: '',
    startBet: '',
    publicationBet: '',
    rate: '',
  };

  idFromPoints = uuidv4();

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  handleOnSubmit = e => {
    e.preventDefault();

    if (Number(this.state.rate) > 10 || Number(this.state.rate) < 1)
      return alert('Enter number from 1 to 10');
    if (!Number.isInteger(Number(this.state.rate)))
      return alert('Enter integer');
    if (
      Date.parse(new Date(this.state.publicationBet)) >
      Date.parse(new Date(this.state.startBet))
    )
      return alert('Enter valid date');

    fetch('http://localhost:8080/api/bets', {
      method: 'POST',
      body: JSON.stringify({
        userID: uuidv4(),
        userName: 'Bro',
        points: Number(this.state.pointValue),
        type: this.state.category,
        betValue: Number(this.state.rate),
        exitDate: Date.parse(new Date(this.state.publicationBet)),
        creatingDate: Date.parse(new Date(this.state.startBet)),
      }),
      headers: {
        'content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEzMTMxMzEzIiwiaWQiOiI1Y2VmYTNmNGRjNWFhNzI0OTg3N2NlNmMiLCJpYXQiOjE1NTkyMTYyODcsImV4cCI6MTU1OTMwMjY4N30.bs_Eq86Fh57tW2YpSciwV-MoP6snlUJJbw8eKyK1yIE',
      },
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNewBetChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      isModalOpen,
      category,
      typeBet,
      pointValue,
      startBet,
      publicationBet,
      rate,
    } = this.state;
    return (
      <div>
        <Button type="button" onClick={this.openModal}>
          New Pari
        </Button>

        {isModalOpen && (
          <NewBet onClose={this.closeModal}>
            <form onSubmit={this.handleOnSubmit}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Point</TableCell>
                    <TableCell>Rate</TableCell>
                  </TableRow>
                  <TableRow className={styles.test}>
                    <TableCell component="th" scope="row">
                      Имя
                    </TableCell>
                    <TableCell>
                      <CategorySelector
                        name="category"
                        value={category}
                        onChange={this.handleNewBetChange}
                        types={typeBet}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        className={styles.modalPoints}
                        type="number"
                        value={pointValue}
                        name="pointValue"
                        onChange={this.handleNewBetChange}
                      />
                    </TableCell>
                    <TableCell>
                      <input
                        className={styles.modalPoints}
                        type="number"
                        value={rate}
                        name="rate"
                        onChange={this.handleNewBetChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Start Game</TableCell>
                    <TableCell>Publication</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TextField
                        className={styles.modalStartPariDate}
                        name="startBet"
                        onChange={this.handleNewBetChange}
                        value={startBet}
                        type="datetime-local"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        className={styles.modalPublicDate}
                        name="publicationBet"
                        onChange={this.handleNewBetChange}
                        value={publicationBet}
                        type="date"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button type="submit" color="primary" className={styles.modalBtn}>
                Создать
              </Button>
            </form>
          </NewBet>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active: state.active,
});

export default connect(mapStateToProps)(NewBetModal);
