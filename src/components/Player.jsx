import React from 'react';
import './Player.css';

export default class Player extends React.Component {

    render() {
        return(
            <div className="Player">
                <iframe title={this.props.title} src={`https://bandcamp.com/EmbeddedPlayer/album=${this.props.albumId}/size=large/bgcol=ffffff/linkcol=333333/package=${this.props.merchId ? this.props.merchId : ''}/transparent=true/`} seamless/>
            </div>
        )
    }
}