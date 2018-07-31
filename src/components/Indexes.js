import React, { Component } from 'react';
import IndexItem from './IndexItem';
const Infinite = require('react-infinite');

class Indexes extends Component {
  render = () => {
    const indexItems = (
      this.props.indexes
        .filter((index) => (
          index && typeof index.id === "number" && 
          index.name && index.title
        )).map((index) => (
            <IndexItem key={"index-"+index.id} index={index} />
        ))
    );
    
    return (
      <div className="Indexes"
        style={{
          height: `${this.props.height}px` || "100%",
          width: `${this.props.width}px` || "100%"
        }}>
        <Infinite 
          containerHeight={520} 
          elementHeight={100} >
            {indexItems}
        </Infinite>
        
      </div>
    );
  }
}

export default Indexes;
