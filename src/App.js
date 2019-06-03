import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ActiveGames from './pages/ActiveGames/ActiveGames';
import Store from './store';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/active_games" component={ActiveGames} />
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
};

export default App;
