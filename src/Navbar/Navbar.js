import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");

        closeBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            menuBtnChange();
        });

        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="logo-details">
                <div className="logo_name">CyberJunk</div>
                <i className='bx bx-menu' id="btn"></i>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink exact activeClassName="active" to="/">
                        <i className='bx bx-home-alt'></i>
                        <span className="links_name">Home</span>
                    </NavLink>
                    <span className="tooltip">Home</span>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/events">
                        <i className='bx bx-calendar-event'></i>
                        <span className="links_name">Events</span>
                    </NavLink>
                    <span className="tooltip">Events</span>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/team">
                        <i className='bx bx-group'></i>
                        <span className="links_name">Team</span>
                    </NavLink>
                    <span className="tooltip">Team</span>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">
                        <i className='bx bx-mail-send'></i>
                        <span className="links_name">Contact</span>
                    </NavLink>
                    <span className="tooltip">Contact</span>
                </li>
            </ul>
        </div>
    )
}

export default Navbar