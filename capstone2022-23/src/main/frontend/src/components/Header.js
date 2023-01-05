import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

const Header = () => (
  <header>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={NavLink} to="/" exact={true}>
        Home
      </NavbarBrand>
      <NavbarBrand tag={NavLink} to="/create">
        Shop
      </NavbarBrand>
      <NavbarBrand tag={NavLink} to="/myitems">
        My Items
      </NavbarBrand>
      <NavbarBrand tag={NavLink} to="/myaccount">
        My Account
      </NavbarBrand>
      <NavbarBrand tag={NavLink} to="/logout">
        Logout
      </NavbarBrand>
    </Navbar>
  </header>
);

export default Header;
