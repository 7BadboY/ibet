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
import NewPari from './NewPari';
import CategorySelector from './CategorySelector';
import styles from './NewPari.module.css';

class NewPariModal extends Component {
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

  // handleCategoryChange = e => {
  //   this.setState({ category: e.target.value });
  // };

  // handlePointChange = e => {
  //   this.setState({
  //     pointValue: e.target.value,
  //   });
  // };

  handleOnSubmit = e => {
    e.preventDefault();

    // if ()

    console.log(this.state);
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
          <NewPari onClose={this.closeModal}>
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
          </NewPari>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  active: state.active,
});

export default connect(mapStateToProps)(NewPariModal);
