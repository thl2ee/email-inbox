import React, { Component } from 'react';
import IndexItem from './IndexItem';

class Indexes extends Component {
  constructor() {
    super();
    this.state = {
      indexes: []
    }
  }
  render() {
    let indexItems;
    let indexes = this.props.indexes;
    if (indexes) {
      indexItems = indexes.map((index) => (
        <IndexItem key={index.name} index={index} />
      ));
    }
    return (
      <div className="Indexes">
       {indexItems}
      </div>
    );
  }
}

export default Indexes;
