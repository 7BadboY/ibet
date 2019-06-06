import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncGetBets } from '../../components/CustomTable/tableAction';
import CustomTable from '../../components/CustomTable/CustomTable';
// import NewPariModal from '../../components/NewPari/NewPariModal';
import NewPariModal from '../../components/NewPari/NewPariModal';

<<<<<<< HEAD
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
        <CustomTable active={active} />
      </div>
    );
  }
=======
function ActiveGames({ active }) {
  return (
    <div>
      <NewPariModal />
      <h2>ActiveGames</h2>
      <CustomTable active={active} />
    </div>
  );
>>>>>>> dev
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
