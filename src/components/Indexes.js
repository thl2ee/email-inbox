import React, { Component } from 'react';
import IndexItem from './IndexItem';
const Infinite = require('react-infinite');

class Indexes extends Component {
  render = () => {
    return (
      <div className="Indexes"
        style={{
          height: `${this.props.height}px` || "100%",
          width: `${this.props.width}px` || "100%"
        }}>
        <Infinite 
          containerHeight={520} 
          elementHeight={100} >
            {
              this.props.indexes.map((index) => (
                <IndexItem key={index.id} index={index} />
              ))
            }
        </Infinite>
        
      </div>
    );
  }
}

export default Indexes;
