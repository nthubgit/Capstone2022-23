import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class Header extends Component {

  logOut() {
    this.props.dispatch(logout());
  }

  render () {
    return (
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
      <NavbarBrand tag={NavLink} to="/register">
      Register
    </NavbarBrand>
      <NavbarBrand tag={NavLink} to="/login" onClick={this.logOut}>
        Logout
      </NavbarBrand>
    </Navbar>
  </header>
    )
  }
}

export default Header;
