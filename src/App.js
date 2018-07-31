import React, { Component } from 'react';
import EmailIndexes from './components/EmailIndexes';
import "typeface-roboto";

const emailService = require('./services/email');
const DEFAULT_ROW_NUMBER = 100;
const MAX_ROW_NUMBER = 300000;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: 0,
      emails: []
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  _addPrefixForTime = (timeNumber) => (
    timeNumber < 10 ? `0${timeNumber}` : timeNumber
  );

  _buildMockEmails = (numberOfRow) => {
    let emails = [];
    for (let i = numberOfRow; i > 0; i--) {
      const rowIndex = numberOfRow - i + 1;
      emails.push(new emailService.Email({
        from: {
          name: `Name of row #${rowIndex}`,
          email: "test@test.com"
        },
        dateTime: `${
          this._addPrefixForTime(rowIndex % 24)
        }:${
          this._addPrefixForTime(rowIndex % 59)
        }`,
        subject: `Subject of row #${rowIndex}`,
        body: `Body of row #${rowIndex}`
      }));
    }
    return emails;
  };
  
  _handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      numberOfRow: (
        value > MAX_ROW_NUMBER
      ) ? MAX_ROW_NUMBER : value
    });
  }

  _handleSubmit = (e) =>  {
    const numberOfRow = this.state.numberOfRow;
    if (numberOfRow === this.state.emails.length) {
      e.preventDefault();
      return;
    }

    this.setState({
      emails: this._buildMockEmails(numberOfRow)
    });
    e.preventDefault();
  }

  componentDidMount = () => (
    emailService.getEmails()
      .then((emails) => {
        this.setState({
          numberOfRow: emails.length || 0,
          emails: emails.slice(0) || []
        })
      }).catch((error) => error)
  );

  render = () => {
    return (
      <div className="App">

        <form onSubmit={this._handleSubmit}>
          <label>Number of Row:&nbsp;
            <input 
              type="number"
              value={this.state.numberOfRow} 
              onChange={this._handleChange} />
          </label>&nbsp;
          <input type="submit" value="Submit" />
        </form>

        <EmailIndexes 
          emails={this.state.emails} />
      </div>
    );
  }
}

export default App;
