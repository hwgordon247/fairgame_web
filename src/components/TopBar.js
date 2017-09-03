import React from 'react';
import { Link } from 'react-router-dom';
import LogoutService from '../services/LogoutService';
import history from '../util/history';

class TopBar extends React.Component {
  profileClick() {
    const username = localStorage.getItem('username');
    if (username) {
      history.push(`/profile/${username}`);
    } else {
      history.push('login');
    }
  }

  render() {
    return (
      <div className="top-bar">
        <Link to="/"> Home </Link>
        <div onClick={this.profileClick}> Profile </div>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
        <Link to="/list"> List </Link>
        <div onClick={LogoutService.logout}> Logout </div>
      </div>
    );
  }
}

export default TopBar;
