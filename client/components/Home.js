import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExampleVariable } from '../redux/reducer';
import ItemService from '../services/ItemService';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      items: []
    };
    this.click = this.click.bind(this);
  }

  componentWillMount() {
    ItemService.getItems((error, response) => {
      if (error) console.log(error);
      this.setState({
        items: response.data
      });
    });
  }

  click() {
    this.props.setExampleVariable('1 more week');
  }

  renderListItems() {
    return this.state.items.map((item, index) => {
      return (
        <div key={index}>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>Owned By: {item.ownedBy.username}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Fairgame</h1>
        <h4> All dem animals: </h4>
        <div>{this.renderListItems()}</div>
      </div>
    );
  }
}
const mapState = ({ variable }) => ({ variable });
const mapDispatch = { setExampleVariable };
export default connect(mapState, mapDispatch)(Home);
