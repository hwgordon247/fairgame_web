import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';
import store from './redux/store';
import history from './util/history';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
