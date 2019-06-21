import React from 'react';
import { Preloader } from 'react-preloading-screen';
import classes from './Preloader.module.css';

const Preload = () => (
  <Preloader>
    {/* <div className={classes.preloader}>
      <div className={classes.container}>
        <div className={classes.box} />
        <div className={classes.box} />
        <div className={classes.box} />
        <div className={classes.box} />
        <div className={classes.box} />
      </div>
    </div> */}
    <div className={classes.preloader}>
      <div className={classes.prePreloader} />
    </div>
  </Preloader>
);

export default Preload;
