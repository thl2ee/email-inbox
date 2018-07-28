import React, { Component } from 'react';

class IndexItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Indexes">
        {this.props.index.name} - {this.props.index.title} - {this.props.index.description}   
      </div>
    );
  }
}

export default IndexItem;
