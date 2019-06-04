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
    category: 'random',
    typeBet: ['random', 'cazino', 'football'],
    pointValue: '',
    startBet: '',
    publicationBet: '',
    rate: '',
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  handleOnSubmit = e => {
    const { session } = this.props;
    e.preventDefault();

    if (this.state.pointValue > session.user.points)
      return alert('Not enough points');

    if (Number(this.state.rate) > 10 || Number(this.state.rate) < 1)
      return alert('Enter number from 1 to 10');

    if (!Number.isInteger(Number(this.state.rate)))
      return alert('Enter integer');

    if (
      Date.parse(new Date(this.state.publicationBet)) >
        Date.parse(new Date(this.state.startBet)) ||
      Date.parse(new Date(this.state.startBet)) < Date.now() ||
      Date.parse(new Date(this.state.publicationBet)) < Date.now()
    )
      return alert('Enter valid date');

    fetch('http://localhost:8080/api/bets', {
      method: 'POST',
      body: JSON.stringify({
        userID: session.user.id,
        userName: session.user.userName,
        points: Number(this.state.pointValue),
        type: this.state.category,
        betValue: Number(this.state.rate),
        exitDate: Date.parse(new Date(this.state.publicationBet)),
        creatingDate: Date.parse(new Date(this.state.startBet)),
      }),
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${session.token}`,
      },
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
          console.log(session);
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.reset();
  };

  handleNewBetChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      isModalOpen: false,
      category: 'random',
      pointValue: '',
      startBet: '',
      publicationBet: '',
      rate: '',
    });
  }

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
    const { session } = this.props;
    return (
      <div>
        {session.isAuthenticated && (
          <Button type="button" onClick={this.openModal}>
            New Bet
          </Button>
        )}

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
                      {session.user.userName}
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
                        type="datetime-local"
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
  session: state.session,
});

export default connect(mapStateToProps)(NewBetModal);
