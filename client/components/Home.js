import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExampleVariable } from '../redux/reducer';
import ItemService from '../services/ItemService';
import ItemList from './ItemList';

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
      if (error) {
        console.log(error);
      } else {
        this.setState({
          items: response.data
        });
      }
    });
  }

  click() {
    this.props.setExampleVariable('1 more week');
  }

  render() {
    return (
      <div>
        <h1>Fairgame</h1>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
const mapState = ({ variable }) => ({ variable });
const mapDispatch = { setExampleVariable };
export default connect(mapState, mapDispatch)(Home);
