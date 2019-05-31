import React, { Component } from 'react';
import Map from '../../components/Map/Map';
import TextFields from '../../components/FeedbackForm/FeedbackForm';

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

  onSubmit = () => {
    const { name, country, mail, feedback } = this.state;
    const data = { name, country, mail, feedback };
    console.log('data:_____', data);
  };

  render() {
    return (
      <div>
        <Map isMarkerShown />
        <TextFields onChange={this.onChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
