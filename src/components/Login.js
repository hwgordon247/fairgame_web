import React from 'react';
import LoginService from '../services/LoginService';
import history from '../util/history';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    LoginService.loginUser(this.state.username, this.state.password,
      (response) => {
        localStorage.setItem('token', response.data.token);
        history.push('/profile');
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        Login
        <form onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default Login;
