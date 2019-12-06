import React from 'react';
import './Menu.css';
import {BrowserRouter, NavLink} from "react-router-dom";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        };
    }

    getOpenClass() {
        return this.state.isOpen ? 'Menu Menu-open' : 'Menu';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isOpen !== prevProps.isOpen) {
            this.setState({
                isOpen: this.props.isOpen
            });
        }
    }

    render() {
        return(
            <div className={this.getOpenClass()}>
                <div/>
                <div className="Menu-link-container">
                    <BrowserRouter>
                        <ul>
                            <li><NavLink to="/" className="Menu-link" activeClassName="Menu-selected">Releases</NavLink></li>
                            <li><NavLink to="/artists" className="Menu-link" activeClassName="Menu-selected">Artists</NavLink></li>
                            <li><NavLink to="/contact" className="Menu-link" activeClassName="Menu-selected">Contact</NavLink></li>
                        </ul>
                    </BrowserRouter>
                </div>
                <div className="Menu-footer">
                </div>
            </div>
        );
    }
}