import React, { Component } from 'react';
import  EmailIndexes from './components/EmailIndexes'
import "typeface-roboto";

const MAX_ROW_NUMBER = 300000;
const DEFAULT_ROW_NUMBER = 100000;
// TODO(thanwarin.p): get email info from mock's server
const SAMPLE_EMAILS = [{
    "from" : {
    "name" : "Now TV",
    "email" : "nowtv@test.com"
    },
    "dateTime": "11:35",
    "subject" : "Grab another Pass, you need to be watching this...",
    "body" : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
},  {
    "from" : {
    "name" : "Investopedia Terms",
    "email" : "investopedia@test.com"
    },
    "dateTime": "Yesterday, 11:35",
    "subject" : "What is 'Fibonanci Retracement'?",
    "body" : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
}, {
    "from" : {
    "name" : "ASICS Greater Manchester Marathon ",
    "email" : "events@human-race.co.uk"
    },
    "dateTime": "20/08/2018, 14:40",
    "subject" : "Your chance to take on the marathon",
    "body" : "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRow: DEFAULT_ROW_NUMBER,
      emails: SAMPLE_EMAILS.concat(
        this.buildMockEmails(
          DEFAULT_ROW_NUMBER,
          SAMPLE_EMAILS.length
        )
      )
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buildMockEmails = (numberOfRow, specifiedIndex = 0) => {
    let emails = [];
    for (let i = numberOfRow - specifiedIndex; i > 0; i--) {
      emails.push({
        ...SAMPLE_EMAILS[2],
        from: {
            ...SAMPLE_EMAILS[2].from,
            name: `Name of row #${numberOfRow - i + 1}`
        }
      });
    }
    return emails;
  };
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      numberOfRow: (
        value > MAX_ROW_NUMBER
      ) ? MAX_ROW_NUMBER : value
    });
  }

  handleSubmit = (e) =>  {
    const numberOfRow = this.state.numberOfRow;
    if (numberOfRow === this.state.emails.length) {
      return e.preventDefault();
    }

    this.setState({
      emails: this.buildMockEmails(numberOfRow)
    });
    e.preventDefault();
  }

  render = () => {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Number of Row:&nbsp;
            <input 
              type="number"
              value={this.state.numberOfRow} 
              onChange={this.handleChange} />
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
