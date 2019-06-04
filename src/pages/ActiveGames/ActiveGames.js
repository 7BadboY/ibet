import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomTable from '../../components/CustomTable/CustomTable';
// import NewPariModal from '../../components/NewPari/NewPariModal';
import NewPariModal from '../../components/NewPari/NewPariModal';

function ActiveGames({ active }) {
  return (
    <div>
      <NewPariModal />
      <h2>ActiveGames</h2>
      <CustomTable active={active} />
    </div>
  );
}

ActiveGames.propTypes = {};

const mapStateToProps = state => ({
  active: state.active,
});

export default connect(mapStateToProps)(ActiveGames);
