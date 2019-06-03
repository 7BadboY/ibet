import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import TextFields from '../../components/FeedbackForm/FeedbackForm';
import styles from './ContactUs.module.css';

export default class ContactUs extends Component {
  state = {
    name: '',
    country: '',
    mail: '',
    feedback: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit = () => {
  //   const { name, country, mail, feedback } = this.state;
  //   const data = { name, country, mail, feedback };
  //   console.log('data:_____', data);
  // };
  onSubmit = () => {
    const { name, country, mail, feedback } = this.state;
    const data = { name, country, mail, feedback };

    if (data.name && data.name.length < 10 && data.mail && data.feedback) {
      console.log('data:_____', data);
    } else {
      alert('заполините все поля');
    }
  };

  render() {
    return (
      <div className={styles.section}>
        <div className="map">
          <Map isMarkerShown />
        </div>
        <TextFields onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
