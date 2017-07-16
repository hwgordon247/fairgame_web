import React, { Component } from 'react';

import RegisterService from '../services/RegisterService';
import history from '../util/history';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    RegisterService.registerUser(this.state.email, this.state.username, this.state.password,
      (error, response) => {
        if (error) console.log(error);
        localStorage.setItem('token', response.data.token);
        history.push('/profile');
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <div>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </div>
        Username:
        <div>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        Password:
        <div>
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Register;
