import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './../logo.svg';
import { Link } from 'react-router-dom';

/*
 *  Header component
 */
class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/post'>Post</Link></li>
                        <li><Link to='/photos'>Photos</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default connect()(Header);