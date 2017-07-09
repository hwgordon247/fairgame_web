import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setExampleVariable } from '../redux/reducer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.click = this.click.bind(this);
    this.getItems();
  }

  getItems() {
    axios.get('http://localhost:5000/items')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  click() {
    this.props.setExampleVariable('1 more week');
  }

  render() {
    return (
      <div>
        <div> {this.props.variable} </div>
        <button onClick={this.click}> Click you shitbag </button>
      </div>
    );
  }
}
const mapState = ({ variable }) => ({ variable });
const mapDispatch = { setExampleVariable };
export default connect(mapState, mapDispatch)(Home);
