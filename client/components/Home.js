import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setExampleVariable } from '../redux/reducer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.click = this.click.bind(this);
  }

  click() {
    this.props.setExampleVariable('1 more week');
  }

  render() {
    return (
      <div>
        <div> {this.props.variable} </div>
        <button onClick={this.click}> Click you shit </button>
      </div>
    );
  }
}
const mapState = ({ variable }) => ({ variable });
const mapDispatch = { setExampleVariable };
export default connect(mapState, mapDispatch)(Home);
