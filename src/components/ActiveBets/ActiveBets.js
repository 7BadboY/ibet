import React from 'react';
import { connect } from 'react-redux';
import s from './ActiveBets.module.css';
import CustomTable from '../CustomTable/CustomTable';

const ActiveBets = ({ active }) => {
  return (
    <div className={s.back}>
      <CustomTable activ={active} />
    </div>
  );
};

export default ActiveBets;
