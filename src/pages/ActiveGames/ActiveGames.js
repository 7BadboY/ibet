import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncGetBets } from '../../components/CustomTable/tableAction';
import CustomTable from '../../components/CustomTable/CustomTable';
import NewPariModal from '../../components/NewPari/NewPariModal';

class ActiveGames extends Component {
  state = {};

  componentDidMount() {
    const { getBets } = this.props;
    getBets();
  }

  render() {
    const { active, session } = this.props;
    return (
      <div>
        <h2>ActiveGames</h2>
        <NewPariModal />
        <CustomTable active={active} session={session} />
      </div>
    );
  }
}

ActiveGames.propTypes = {
  getBets: PropTypes.func.isRequired,
  active: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  session: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  active: state.active.items,
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  getBets: () => dispatch(asyncGetBets()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveGames);
