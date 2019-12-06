import React from 'react';
import './Album.css';

export default class Album extends React.Component {

    render() {
        return (
            <div className="Album" >
                <img src={this.props.albumData.image} alt={this.props.albumData.title}/>
                <div className="Album-overlay" >
                    <h4>{this.props.albumData.title}</h4>
                    <h5>{this.props.albumData.artist}</h5>
                </div>
            </div>
        )
    }
}