import React from 'react';
import './Bio.css';
import Utils from "../lib/utils";

export default class Bio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artistData: this.props.artistData
        };

        this.fetchData = this.fetchData.bind(this);
        this.getWebsiteLink = this.getWebsiteLink.bind(this);
        this.getFacebookLink = this.getFacebookLink.bind(this);
        this.getInstagramLink = this.getInstagramLink.bind(this);
    }

    componentDidMount() {
        if(!this.state.artistData) {
            this.fetchData();
        }
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

    render() {
        if(this.state.artistData) {
            return(
                <div className="Bio">
                    <img src={this.state.artistData.other_image} alt={this.state.artistData.name}/>
                    <div className="Bio-overlay">
                        <h1>{this.state.artistData.name}</h1>
                        <div>
                            {this.getWebsiteLink()}
                            {this.getFacebookLink()}
                            {this.getInstagramLink()}
                        </div>
                        <div>
                            <p>{this.state.artistData.notes}</p>
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