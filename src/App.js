import React from 'react';
import './App.css';
import Toolbar from "./components/Toolbar";
import Menu from './components/Menu';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AlbumGrid from "./components/AlbumGrid";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.handleMenuClicked = this.handleMenuClicked.bind(this);
    }

    handleMenuClicked(isOpen) {
        this.setState({
            isMenuOpen: isOpen
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Toolbar isOpen={this.state.isMenuOpen} onMenuClicked={this.handleMenuClicked}/>
                    <Menu isOpen={this.state.isMenuOpen}/>
                </header>
                <div className="App-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                <AlbumGrid />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
                <footer className="App-footer">
                    Floordoor Records
                </footer>
            </div>
        );
    }
}