import React, { Component}  from 'react';
import Indexes from './Indexes';
import '../styles/EmailIndexes.css';

class EmailIndexes extends Component {
    constructor() {
        super();
        // TODO(thanwarin.p): get email info from mock's server
        this.state = {
            emails: [{
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
            }]
        };
    }


    render() {
        return <Indexes indexes={
            this.state.emails.map((email) => ({
                name: email.from.name,
                title: email.subject,
                description: email.body,
                dateTime: email.dateTime
            }))} styleName="indexes-emails" />
    }
}

export default EmailIndexes;