import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // TODO(thanwarin.p): get email info from mock's server
    this.state = {
      emails: [
        {
          "from" : {
            "name" : "Now TV",
            "email" : "nowtv@test.com"
          },
          "subject" : "Grab another Pass, you need to be watching this...",
          "body" : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
        },
        {
          "from" : {
            "name" : "Investopedia Terms",
            "email" : "investopedia@test.com"
          },
          "subject" : "What is 'Fibonanci Retracement'?",
          "body" : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
        },
        {
          "from" : {
            "name" : "ASICS Greater Manchester Marathon ",
            "email" : "events@human-race.co.uk"
          },
          "subject" : "Your chance to take on the marathon",
          "body" : "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}

export default App;
