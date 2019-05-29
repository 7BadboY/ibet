import React from 'react';
import PropTypes from 'prop-types';
import CustomTable from '../../components/CustomTable/CustomTable';

function ActiveGames(props) {
  return (
    <div>
      <h2>ActiveGames</h2>
      <CustomTable />
    </div>
  );
}

ActiveGames.propTypes = {};

export default ActiveGames;
