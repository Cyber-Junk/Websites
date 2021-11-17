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
        <div class="sidebar">
            <div class="logo-details">
                <div class="logo_name">CyberJunk</div>
                <i class='bx bx-menu' id="btn"></i>
            </div>
            <ul class="nav-list">
                <li>
                    <a href="#">
                        <i class='bx bx-home-alt'></i>
                        <span class="links_name">Home</span>
                    </a>
                    <span class="tooltip">Home</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-calendar-event'></i>
                        <span class="links_name">Events</span>
                    </a>
                    <span class="tooltip">Events</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-user-voice'></i>
                        <span class="links_name">Workshops</span>
                    </a>
                    <span class="tooltip">Workshops</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-donate-heart'></i>
                        <span class="links_name">Sponsors</span>
                    </a>
                    <span class="tooltip">Sponsors</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-mail-send'></i>
                        <span class="links_name">Contact</span>
                    </a>
                    <span class="tooltip">Contact</span>
                </li>
            </ul>
        </div>
    )
}

export default Navbar