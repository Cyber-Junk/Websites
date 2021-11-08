import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent zindex-fixed">
            <a className="navbar-brand" href="#"><img alt="logo" width="50" height="50" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">EVENTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">TEAM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar