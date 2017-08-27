import React from 'react';
import UserService from '../services/UserService';
import ItemService from '../services/ItemService';
import ItemList from './ItemList';

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
    ItemService.getUserItems((err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          items: res.data
        });
      }
    });
  }

  render() {
    return (
      <div>
        Profile
        <div>
          Username: {this.state.username}
        </div>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default Profile;
