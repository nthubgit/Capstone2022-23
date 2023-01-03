import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Title Goes Here, Make a Better Title Later</h1>
        <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Shop</NavLink>
        <NavLink to="/myitems" activeClassName='is-active'>My Items</NavLink>
        <NavLink to="/account" activeClassName='is-active'>My Account</NavLink>
        <NavLink to="/logout" activeClassName='is-active'>Logout</NavLink>
    </header>
);

export default Header;