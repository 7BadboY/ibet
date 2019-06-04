import React from 'react';
import s from './Profile.module.css';
import ProfUser from '../ProfUser/ProfUser';

const Profile = () => {
  return (
    <>
      <header className={s.header}>
        <ProfUser />
      </header>
    </>
  );
};

export default Profile;
