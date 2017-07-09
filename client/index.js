import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Register from './components/Register';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/register"> Register </Link>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
