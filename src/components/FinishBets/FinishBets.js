import React from 'react';
import s from './FinishBets.module.css';
import CustomTable from '../CustomTable/CustomTable';

const FinishBets = ({ session }) => {
  return (
    // <div className={s.back}>FinishBets</div>;

    <div className={s.back}>
      <h2>FinishBets</h2>
      <CustomTable
        session={session}
        active={session.user.history}
        disabledFunc
      />
    </div>
  );
};

export default FinishBets;
