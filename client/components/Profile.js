import React from 'react';
import UserService from '../services/UserService';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentWillMount() {
    UserService.getCurrentUser((err, res) => {
      if (err) console.log(err);
      this.setState({
        username: res.data.username
      });
    });
  }

  render() {
    return (
      <div>
        Profile
        <div>
          Username: {this.state.username}
        </div>
      </div>
    );
  }
}

export default Profile;
