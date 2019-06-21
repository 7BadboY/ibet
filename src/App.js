import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ActiveGames from './pages/ActiveGames/ActiveGames';
import LoginModal from './components/ModalLogin/ModalLogin';
import { refreshCurrentUser } from './components/ModalLogin/sessionActions';
import ContactUs from './pages/ContactUs/ContactUs';
import ProtectedRoute from './hoc/ProtectedRoute';
import Profile from './pages/ProfUser/ProfUser';
import Preloader from './components/Preloader/Preloader';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { getCurrentUser } = this.props;
    // console.log('App');
    getCurrentUser();
    setTimeout(() => this.setState({ loading: false }), 4500);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <Preloader />}
        <Route path="/" component={LoginModal} />
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/active_games" component={ActiveGames} />
        <ProtectedRoute path="/profile" redirectTo="/" component={Profile} />
        <Route path="/" component={Footer} />
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
