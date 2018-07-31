import React, { Component } from 'react';
import '../styles/IndexItem.css';

const COLOR_LIST = [
  "rgb(95,65,183)",
  "rgb(23,161,26)",
  "rgb(125,57,119)",
  "rgb(252,25,151)",
  "rgb(46,88,149)"
];

class IndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    }
  }
  
  render = () =>  {
    const getFirstCharacterFromString = (str) => (
      (str || "").charAt(0)
    );
    let words = this.state.index.name.split(" ");
    let label = getFirstCharacterFromString(
      (!words) ? "" : words[0]
    );
    
    if (words.length === 2) {
      label = `${
        getFirstCharacterFromString(words[0])
      }${
        getFirstCharacterFromString(words[1])
      }`;
    }

    return (
      <div className="Indexes">
        <div className="index-item">

          <div className="index-item-icon">
            <div className="index-item-icon-circle"
              style={{ 
                backgroundColor: COLOR_LIST[
                  this.state.index.id % COLOR_LIST.length
                ]
              }} >
              <div className="index-item-icon-circle-label">
                {label}
              </div>
            </div> 
          </div>

          <div className="index-item-details">
            <div className="index-item-details-name">
              {this.state.index.name}
            </div>
            <div className="index-item-details-title">
              {this.state.index.title}
            </div>
            <div className="index-item-details-time">
              {this.state.index.dateTime}
            </div>
            <div className="index-item-details-description">
              {this.state.index.description}
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default IndexItem;