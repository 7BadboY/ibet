import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ActiveGames from './pages/ActiveGames/ActiveGames';
import LoginModal from './components/ModalLogin/ModalLogin';
import { refreshCurrentUser } from './components/ModalLogin/sessionActions';
import ContactUs from './pages/ContactUs/ContactUs';

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    // console.log('App');
    getCurrentUser();
  }

  render() {
    return (
      <div>
        <Route path="/" component={LoginModal} />
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/active/games" component={ActiveGames} />
        <Route path="/contactus" component={ContactUs} />
      </div>
    );
  }
}

App.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  { getCurrentUser: refreshCurrentUser },
)(App);
