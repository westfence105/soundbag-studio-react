import React from 'react';
import { NavLink } from 'react-router-dom';


const HeaderLink = ({ page }) => (
        <li id={`main-menu-${page}`}>
            <NavLink to={`/${ page }`} activeClassName="main-menu-active">{ page.toUpperCase() }</NavLink>
        </li>
);

export default HeaderLink;
