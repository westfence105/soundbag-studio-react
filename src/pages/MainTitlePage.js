import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css";
import "./MainTitlePage.css";

const MainTitlePage = () => (
        <div className="main-title-page">
            <h1 className="main-title">soundbag studio</h1>
            <hr className="star" />
            <div className="caption">Software Engineer & Sound Producer</div>
            <ul className="main-menu">
                <li id="main-menu-about"   ><Link to="/about"   >ABOUT</Link></li>
                <li id="main-menu-profile" ><Link to="/profile" >PROFILE</Link></li>
                <li id="main-menu-engineer"><Link to="/engineer">ENGINEER</Link></li>
                <li id="main-menu-music"   ><Link to="/music"   >MUSIC</Link></li>
                <li id="main-menu-contact" ><Link to="/contact" >CONTACT</Link></li>
            </ul>
        </div>
);

export default MainTitlePage;
