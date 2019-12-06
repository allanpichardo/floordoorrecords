import React from 'react';
import './Artist.css';

export default class Artist extends React.Component {

    render() {
        return(
            <div className="Artist">
                <img src={this.props.artistData.cover_image} alt={this.props.artistData.title}/>
            </div>
        )
    }
}