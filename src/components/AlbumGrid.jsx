import React from 'react';
import './AlbumGrid.css';
import Album from "./Album";
import Utils from "../lib/utils";

export default class AlbumGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            albumData: []
        };

        this.fetchAlbumData = this.fetchAlbumData.bind(this);
    }

    componentDidMount() {
        this.fetchAlbumData();
    }

    fetchAlbumData() {
        Utils.fetchAllAlbums((err, albums) => {
            if(err) {
                console.log(err);
            } else {
                this.setState({
                    albumData: albums
                })
            }
        });
    }

    render() {
        let albumData = this.state.albumData.slice();
        return (
            <div className="AlbumGrid">
                {
                    albumData.map((album) => {
                        return (<Album albumData={album} key={album.title}/>);
                        })
                }
            </div>
        )
    }
}