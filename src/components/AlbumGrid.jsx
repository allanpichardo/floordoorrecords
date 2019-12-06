import React from 'react';
import './AlbumGrid.css';
import Album from "./Album";
import albumData from '../data/albumdata.json';

export default class AlbumGrid extends React.Component {



    render() {
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