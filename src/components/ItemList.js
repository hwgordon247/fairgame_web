import React from 'react';

class ItemList extends React.Component {
  itemClick() {
    console.log('click');
  }

  renderListItems() {
    return this.props.items.map((item, index) => {
      return (
        <div key={index} className="item" onClick={this.itemClick}>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>
            <span>
              Owned By:
            </span>
            <a className="username" href={`profile/${item.ownedBy.username}`}>
              {item.ownedBy.username}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.items && this.renderListItems()}</div>
      </div>
    );
  }
}

export default ItemList;
