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
  
  _getFirstCharacterFromString = (str) => (str || "").charAt(0);
  
  _getLabelByName = (name) => {
    if (!name && (typeof name !== "string")) {
      return "";
    }

    let words = name.split(" ") || [];
    const firstLetter = this._getFirstCharacterFromString(words[0])

    return (words.length === 2) ? 
      `${firstLetter}${this._getFirstCharacterFromString(words[1])}` :
      firstLetter;
  }
  
  render = () =>  {
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
                {this._getLabelByName(this.state.index.name)}
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