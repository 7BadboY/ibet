import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ActiveGames from './pages/ActiveGames/ActiveGames';
import Store from './store';
import LoginModal from './components/ModalLogin/ModalLogin';

const LoginModalSnack = withSnackbar(LoginModal);

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <LoginModalSnack />
    </SnackbarProvider>
  );
}

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Route path="/" component={IntegrationNotistack} />
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/active/games" component={ActiveGames} />
      </Router>
    </Provider>
  );
};

export default App;
