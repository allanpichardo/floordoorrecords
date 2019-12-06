import React from 'react';
import './AlbumGrid.css';
import Album from "./Album";

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
        fetch('/data/albums.json')
            .then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({
                    albumData: data
                })
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