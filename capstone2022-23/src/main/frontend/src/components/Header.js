import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar } from 'reactstrap';

const Header = () => (
    <header>
    <Navbar color="dark" dark expand="md">
        <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Shop</NavLink>
        <NavLink to="/myitems" activeClassName='is-active'>My Items</NavLink>
        <NavLink to="/myaccount" activeClassName='is-active'>My Account</NavLink>
        <NavLink to="/logout" activeClassName='is-active'>Logout</NavLink>
        </Navbar>
    </header>
);

export default Header;