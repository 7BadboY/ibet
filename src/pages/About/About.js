import React from 'react';

import Taras from '../../avatars/Taras.jpg';
import Bakov from '../../avatars/Bakov.jpg';
import Balan from '../../avatars/Balan.jpg';
import Butenko from '../../avatars/Butenko.jpg';
import Pastushenko from '../../avatars/Pastushenko.jpeg';
import Nikonenko from '../../avatars/Nikonenko.jpg';
import Romanov from '../../avatars/Romanov.jpg';
import Kovalenko from '../../avatars/Kovalenko.png';
import Goma from '../../avatars/Goma.jpg';
import Chenchovii from '../../avatars/Chenchovii.jpg';
import Sharkovsky from '../../avatars/Sharkovsky.jpg';
import Yarotsky from '../../avatars/Yarotsky.jpg';
import Hrevtsova from '../../avatars/Hrevtsova.png';
import classes from './About.module.css';

// import PropTypes from 'prop-types';

function About() {
  return (
    <div className={classes.project}>
      <div className={classes.guru}>
        <div className={classes.mainUnit}>
          <img src={Taras} alt="Taras" width="100" height="100" />
          <p>text</p>
        </div>
      </div>
      <div className={classes.generationZ}>
        <div className={classes.homePage}>
          <div className={classes.unitLeft}>
            <img src={Bakov} alt="Bakov" width="100" height="100" />
            <p>text</p>
          </div>
          <div className={classes.headerFooter}>
            <div className={classes.unit}>
              <img src={Hrevtsova} alt="Hrevtsova" width="100" height="100" />
              <p>text</p>
            </div>
          </div>
        </div>
        <div className={classes.contactUs}>
          <div className={classes.unit}>
            <img src={Kovalenko} alt="Kovalenko" width="100" height="100" />
            <p>text</p>
          </div>
          <div className={classes.navContact}>
            <div className={classes.unitLeft}>
              <img src={Butenko} alt="Butenko" width="100" height="100" />
              <p>text</p>
            </div>
            <div className={classes.unitRight}>
              <img src={Nikonenko} alt="Nikonenko" width="100" height="100" />
              <p>text</p>
            </div>
          </div>
        </div>
        <div className={classes.registration}>
          <div className={classes.unit}>
            <img src={Pastushenko} alt="Pastushenko" width="100" height="100" />
            <p>text</p>
          </div>
          <div className={classes.login}>
            <div className={classes.unit}>
              <img src={Balan} alt="Balan" width="100" height="100" />
              <p>text</p>
            </div>
          </div>
        </div>
        <div className={classes.profile}>
          <div className={classes.unit}>
            <img src={Goma} alt="Goma" width="100" height="100" />
            <p>text</p>
          </div>
        </div>
        <div className={classes.scores}>
          <div className={classes.unitRight}>
            <img src={Romanov} alt="Romanov" width="100" height="100" />
            <p>text</p>
          </div>
          <div className={classes.scoresTeam}>
            <div className={classes.unitLeft}>
              <img src={Chenchovii} alt="Chenchovii" width="100" height="100" />
              <p>text</p>
            </div>
            <div className={classes.unit}>
              <img src={Sharkovsky} alt="Sharkovsky" width="100" height="100" />
              <p>text</p>
            </div>
            <div className={classes.unitRight}>
              <img src={Yarotsky} alt="Yarotsky" width="100" height="100" />
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
