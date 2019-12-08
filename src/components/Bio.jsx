import React from 'react';
import './Bio.css';
import Utils from "../lib/utils";
import AlbumGrid from "./AlbumGrid";

export default class Bio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artistData: this.props.artistData,
            albums: this.props.albums
        };

        this.fetchData = this.fetchData.bind(this);
        this.getWebsiteLink = this.getWebsiteLink.bind(this);
        this.getFacebookLink = this.getFacebookLink.bind(this);
        this.getInstagramLink = this.getInstagramLink.bind(this);
        this.getSpotifyLink = this.getSpotifyLink.bind(this);
    }

    componentDidMount() {
        if(!this.state.artistData) {
            this.fetchData();
        }
    }

    fetchAlbumData() {
        Utils.fetchAllAlbums((err, albums) => {
            if(err) {
                console.log(err);
            } else {
                let specificAlbums = [];
                albums.forEach(album => {
                    if(album.artist === this.state.artistData.name) {
                        specificAlbums.push(album);
                    }
                });
                this.setState({
                    albums: specificAlbums
                })
            }
        })
    }

    fetchData() {
        let slug = this.props.match.params.slug;
        Utils.fetchAllArtists((err, artists) => {
            if(err) {
                console.log(err);
            } else {
                let artist = Utils.findArtistBySlug(artists, slug);
                this.setState({
                    artistData: artist
                }, () => {
                    this.fetchAlbumData();
                })
            }
        });
    }

    getWebsiteLink() {
        if(this.state.artistData.website) {
            return(
                <a href={this.state.artistData.website} target="_blank" rel="noopener noreferrer">
                    <i className="ion-md-globe"/>
                </a>
            )
        } else {
            return (<span/>);
        }
    }

    getFacebookLink() {
        if(this.state.artistData.facebook) {
            return(
                <a href={this.state.artistData.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="ion-logo-facebook"/>
                </a>
            )
        } else {
            return (<span/>);
        }
    }

    getInstagramLink() {
        if(this.state.artistData.instagram) {
            return(
                <a href={this.state.artistData.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="ion-logo-instagram"/>
                </a>
            )
        } else {
            return (<span/>);
        }
    }

    getSpotifyLink() {
        if(this.state.artistData.spotify) {
            let parts = this.state.artistData.spotify.split('/');
            let id = parts[parts.length - 1];
            return(
                <iframe
                    src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${id}&size=basic&theme=light&show-count=0`}
                    width="94" height="28" scrolling="no" frameBorder="0" title={this.state.artistData.name}
                    allowtransparency="true">
                </iframe>
            )
        } else {
            return (<span/>);
        }
    }

    render() {
        if(this.state.artistData) {
            return(
                <div className="Bio">
                    <img className="Bio-background" src={this.state.artistData.other_image} alt={this.state.artistData.name}/>
                    <div className="Bio-overlay">
                        <h1>{this.state.artistData.name}</h1>
                        <div className="Bio-overlay-section">
                            {this.getSpotifyLink()}
                        </div>
                        <div className="Bio-overlay-section">
                            {this.getWebsiteLink()}
                            {this.getFacebookLink()}
                            {this.getInstagramLink()}
                        </div>
                        <div className="Bio-overlay-section">
                            <p>{this.state.artistData.notes}</p>
                        </div>
                        <div className="Bio-overlay-section">
                            {this.state.albums ? <AlbumGrid albumData={this.state.albums}/> : <span/>}
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div/>
            )
        }
    }
}