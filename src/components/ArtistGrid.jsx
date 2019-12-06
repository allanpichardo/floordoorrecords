import React from 'react';
import './ArtistGrid.css';
import Artist from "./Artist";
import Utils from "../lib/utils";

export default class ArtistGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: []
        };

        this.fetchArtistData = this.fetchArtistData.bind(this);
    }

    componentDidMount() {
        this.fetchArtistData();
    }

    fetchArtistData() {
        Utils.fetchAllArtists((err, artists) => {
            if(err) {
                console.log(err);
            } else {
                this.setState({
                    artists: artists
                });
            }
        });
    }

    render() {
        return(
            <div className="ArtistGrid">
                <div className="ArtistGrid-columns">
                    {
                        this.state.artists.map((artist) => {
                            return(
                                <Artist artistData={artist} key={artist.name}/>
                            )
                        })
                    }
                </div>
                <div className="ArtistGrid-arrow">
                    <i className="material-icons">
                        navigate_next
                    </i>
                </div>
            </div>
        )
    }
}