import React, { Component } from 'react';
import '../styles/IndexItem.css';

class IndexItem extends Component {
  constructor() {
    super();
  }

  render() {
    const getFirstCharacterFromString = (str) => (
      (str || "").charAt(0)
    );

    let words = this.props.index.name.split(" ");
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
        <div class="index-item">
          <div class="index-item-icon">
            <div class="index-item-icon-circle">
              <div class="index-item-icon-circle-label">
                {label}
              </div>
            </div> 
          </div>
          <div class="index-item-details">
            <div class="index-item-details-name">
              {this.props.index.name}
            </div>
            <div class="index-item-details-title">
              {this.props.index.title}
            </div>
            <div class="index-item-details-time">
              {this.props.index.dateTime}
            </div>
            <div class="index-item-details-description">
              {this.props.index.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexItem;