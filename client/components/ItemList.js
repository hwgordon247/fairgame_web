import React from 'react';

class ItemList extends React.Component {
  renderListItems() {
    return this.props.items.map((item, index) => {
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
        <h4> All dem animals: </h4>
        <div>{this.props.items && this.renderListItems()}</div>
      </div>
    );
  }
}

export default ItemList;
