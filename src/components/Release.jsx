import React from 'react';
import Utils from "../lib/utils";
import './Release.css';
import Player from "./Player";
import {Redirect} from "react-router-dom";

export default class Release extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albumData: this.props.albumData
        };

        this.fetchAlbumData = this.fetchAlbumData.bind(this);
    }

    componentDidMount() {
        if(!this.state.albumData) {
            this.fetchAlbumData();
        }
    }

    fetchAlbumData() {
        let slug = this.props.match.params.slug;
        Utils.fetchAllAlbums((err, albums) => {
            if(err) {
                console.log(err);
            } else {
                let album = Utils.findAlbumBySlug(albums, slug);
                this.setState({
                    albumData: album
                })
            }
        });
    }

    render() {
        if(this.state.albumData) {
            return(
                <div className="Release">
                    <div className="Release-title">
                        <h1>{this.state.albumData.title}</h1>
                        <h3>{this.state.albumData.artist}</h3>
                    </div>
                    <div className="Release-info">
                        <p>{this.state.albumData.notes}</p>
                    </div>
                    <div className="Release-player">
                        <Player albumId={this.state.albumData.bandcamp_id} merchId={this.state.albumData.merch_id}/>
                    </div>
                </div>
            )
        } else if(this.state.albumData === null){
            return (<Redirect to="/releases"/>);
        } else {
            return (<div></div>);
        }
    }
}