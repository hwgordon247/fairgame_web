import React from 'react';
import UserService from '../services/UserService';
import ItemService from '../services/ItemService';
import ItemList from './ItemList';

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: props.match.params.username,
      email: ''
    };
  }

  componentWillMount() {
    UserService.getUser(this.state.username, (err, res) => {
      if (err) {
        this.setState({
          error: 'User not found.'
        });
      } else {
        this.setState({
          username: res.data.username,
          email: res.data.email
        });
      }
    });
    ItemService.getUserItems(this.state.username, (res) => {
      this.setState({
        items: res.data
      });
    });
  }

  renderProfile() {
    return (
      <div>
        Profile
        <div>
          Username: {this.state.username}
        </div>
        <div>
          Email: {this.state.email}
        </div>
        <h4>Your animals:</h4>
        <ItemList items={this.state.items} />
      </div>
    );
  }

  renderError() {
    return (
      <div> User not found! </div>
    );
  }

  render() {
    return (
      <div>
        {!this.state.error && this.renderProfile()}
        {this.state.error && this.renderError()}
      </div>
    );
  }
}

export default Profile;
