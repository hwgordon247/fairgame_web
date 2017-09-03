import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';
import TopBar from './components/TopBar';
import List from './components/List';
import store from './redux/store';
import history from './util/history';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <TopBar />
        <Route exact path="/" component={Home} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/list" component={List} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
