import React from 'react';
import './Menu.css';
import {NavLink} from "react-router-dom";

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

    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (this.state.isOpen && !document.querySelector('.Menu').contains(e.target) && e.target.className !== 'material-icons'){
                this.props.onMenuItemClicked();
            }
        });
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
                    <ul>
                        <li><NavLink exact to="/" className="Menu-link" activeClassName="Menu-selected" onClick={this.props.onMenuItemClicked}>Releases</NavLink></li>
                        <li><NavLink to="/artists" className="Menu-link" activeClassName="Menu-selected" onClick={this.props.onMenuItemClicked}>Artists</NavLink></li>
                        <li><NavLink exact to="/contact" className="Menu-link" activeClassName="Menu-selected" onClick={this.props.onMenuItemClicked}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="Menu-footer">
                    <a href="https://www.allanpichardo.com" target="_blank" rel="noopener noreferrer">{'design by My <3 MHz'}</a>
                </div>
            </div>
        );
    }
}