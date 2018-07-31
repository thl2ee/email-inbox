import React, { Component }  from 'react';
import Indexes from './Indexes';
import '../styles/EmailIndexes.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown)

const EMAIL_INDEXES_HEIGHT = 600;

class EmailIndexes extends Component {
    shouldComponentUpdate = (nextProps) => (
        this.props.emails.length !== nextProps.emails.length
    );

    render = () => {
        let id = 0;
        return (
            <div className="EmailIndexes">
                <div className="email-indexes">
                    <div className="email-indexes-header">
                        <div className="email-indexes-header-title">
                            Inbox
                        </div>
                        <div className="email-indexes-header-filter">
                            Filter&nbsp;<FontAwesomeIcon icon="angle-down" />
                        </div>
                    </div>
                    <div className="email-indexes-scroll">
                        <Indexes 
                            height={EMAIL_INDEXES_HEIGHT}
                            indexes={
                                this.props.emails.map((email) => ({
                                    id: id++,
                                    name: email.from.name,
                                    title: email.subject,
                                    description: email.body,
                                    dateTime: email.dateTime
                                }))
                            } />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailIndexes;