import React from 'react';
import './Artist.css';

export default class Artist extends React.Component {

    render() {
        return(
            <div className="Artist">
                <img src={this.props.artistData.cover_image} alt={this.props.artistData.name}/>
                <div className="Artist-overlay">
                    <h4>{this.props.artistData.name}</h4>
                </div>
            </div>
        )
    }
}