import React, {Component} from 'react';
import './Toolbar.css';
import logo from '../img/floordoor_logo.svg';
import {Link} from "react-router-dom";

export default class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen
        };

        this.handleMenuClicked = this.handleMenuClicked.bind(this);
        this.getButtonStyle = this.getButtonStyle.bind(this);
    }

    getIcon() {
        if (this.state.isOpen) {
            return (<i className="material-icons">
                menu_open
            </i>);
        } else {
            return (<i className="material-icons">
                menu
            </i>);
        }
    }

    handleMenuClicked() {
        if(this.props.onMenuClicked) {
            this.props.onMenuClicked(!this.state.isOpen);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isOpen !== prevProps.isOpen) {
            this.setState({
                isOpen: this.props.isOpen
            });
        }
    }

    getButtonStyle() {
        if(this.state.isOpen) {
            return "Toolbar-menu Toolbar-open";
        } else {
            return "Toolbar-menu";
        }
    }

    render() {
        return (
            <div className="Toolbar">
                <button className={this.getButtonStyle()} onClick={this.handleMenuClicked}>
                    {this.getIcon()}
                </button>
                <div className="Toolbar-title">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="Toolbar-social">
                    <a href="https://www.facebook.com/floordoorrecords" target="_blank" rel="noopener noreferrer">
                        <i className="ion-logo-facebook"/>
                    </a>
                    <a href="https://www.instagram.com/floordoorrecords" target="_blank" rel="noopener noreferrer">
                        <i className="ion-logo-instagram"/>
                    </a>
                </div>
            </div>
        );
    }

}