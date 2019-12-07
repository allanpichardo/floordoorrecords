import React from 'react';
import './Album.css';
import {Link} from "react-router-dom";
import slugify from 'slugify';

export default class Album extends React.Component {

    render() {
        return (
            <div className="Album" >
                <Link to={`/releases/${slugify(this.props.albumData.title)}`}>
                    <img src={this.props.albumData.image} alt={this.props.albumData.title}/>
                    <div className="Album-overlay" >
                        <h4>{this.props.albumData.title}</h4>
                        <h5>{this.props.albumData.artist}</h5>
                    </div>
                </Link>
            </div>
        )
    }
}