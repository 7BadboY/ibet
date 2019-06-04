import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncGetBets } from '../../components/CustomTable/tableAction';
import CustomTable from '../../components/CustomTable/CustomTable';
import NewBetModal from '../../components/NewBet/NewBetModal';

class ActiveGames extends Component {
  state = {};

  componentDidMount() {
    this.props.getBets();
  }

  render() {
    const { active } = this.props;
    return (
      <div>
        <h2>ActiveGames</h2>
        <NewBetModal />
        <CustomTable active={active} />
      </div>
    );
  }
}

ActiveGames.propTypes = {};

const mapStateToProps = state => ({
  active: state.active.items,
});

const mapDispatchToProps = dispatch => ({
  getBets: () => dispatch(asyncGetBets()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveGames);
