import React from 'react';
import './App.css';
import Toolbar from "./components/Toolbar";
import Menu from './components/Menu';
import {HashRouter, Route, Switch} from "react-router-dom";
import AlbumGrid from "./components/AlbumGrid";
import Release from "./components/Release";
import ArtistGrid from "./components/ArtistGrid";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.handleMenuClicked = this.handleMenuClicked.bind(this);
        this.handleMenuItemClicked = this.handleMenuItemClicked.bind(this);
    }

    handleMenuClicked(isOpen) {
        this.setState({
            isMenuOpen: isOpen
        });
    }

    handleMenuItemClicked() {
        this.setState({
            isMenuOpen: false
        })
    }

    render() {
        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <header className="App-header">
                        <Toolbar isOpen={this.state.isMenuOpen} onMenuClicked={this.handleMenuClicked}/>
                        <Menu isOpen={this.state.isMenuOpen} onMenuItemClicked={this.handleMenuItemClicked}/>
                    </header>
                    <div className="App-content">
                            <Switch>
                                <Route exact path="/" render={props => (<AlbumGrid {...props}/>)}/>
                                <Route exact path="/releases" render={props => (<AlbumGrid {...props}/>)}/>
                                <Route path="/releases/:slug" render={props => (<Release {...props}/>)}/>
                                <Route exact path="/artists" render={props => (<ArtistGrid {...props}/>)}/>
                            </Switch>
                    </div>
                    <footer className="App-footer">
                        Floordoor Records
                    </footer>
                </div>
            </HashRouter>
        );
    }
}