import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

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
            <div>
                <div className="logo-details">
                    <div className="logo_name">CyberJunk</div>
                    <i className='bx bx-menu' id="btn"></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <NavLink activeclassname="active" to="/">
                            <i className='bx bx-home-alt'></i>
                            <span className="links_name">Home</span>
                        </NavLink>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/events">
                            <i className='bx bx-calendar-event'></i>
                            <span className="links_name">Events</span>
                        </NavLink>
                        <span className="tooltip">Events</span>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/team">
                            <i className='bx bx-group'></i>
                            <span className="links_name">Team</span>
                        </NavLink>
                        <span className="tooltip">Team</span>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/sponsor">
                            <i class='bx bx-donate-heart'></i>
                            <span className="links_name">Sponsors</span>
                        </NavLink>
                        <span className="tooltip">Sponsors</span>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to="/contact">
                            <i className='bx bx-mail-send'></i>
                            <span className="links_name">Contact</span>
                        </NavLink>
                        <span className="tooltip">Contact</span>
                    </li>
                </ul>
            </div>
            <div>
                <a href="https://www.linkedin.com/company/cyber-junk/" target="_blank">
                    <i class='bx bxl-linkedin-square'></i>
                </a>
                <a href="https://twitter.com/CyberJunk_" target="_blank">
                    <i class='bx bxl-twitter' ></i>
                </a>
            </div>
        </div>
    )
}

export default Navbar
