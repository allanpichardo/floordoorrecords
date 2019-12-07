import React from 'react';
import './Artist.css';
import slugify from "slugify";
import {Link} from "react-router-dom";

export default class Artist extends React.Component {

    render() {
        return(
            <div className="Artist">
                <Link to={`/artists/${slugify(this.props.artistData.name)}`}>
                    <img src={this.props.artistData.cover_image} alt={this.props.artistData.name}/>
                    <div className="Artist-overlay">
                        <h5>{this.props.artistData.name}</h5>
                    </div>
                </Link>
            </div>
        )
    }
}