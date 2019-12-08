import React from 'react';
import './Contact.css';

export default class Contact extends React.Component{

    render() {
        return(
            <div className="Contact">
                <h1>Contact</h1>
                <p>Due to the size of our operation, we simply do not have the capacity to process unsolicited demos.</p>
                <p>For all other inquiries, email us at: <a href="mailto:floordoorrecords@gmail.com">floordoorrecords@gmail.com</a></p>
            </div>
        )
    }
}