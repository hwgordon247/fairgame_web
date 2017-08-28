import React from 'react';
import ItemService from '../services/ItemService';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    ItemService.createItem(this.state.name, this.state.description,
    (response) => {
      console.log(response);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>List an Animal</div>
        <form onSubmit={this.handleSubmit}>
          Animal Name:
          <div>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </div>
          Description:
          <div>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default List;
