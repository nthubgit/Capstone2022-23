import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Redirect } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

class Header extends Component {

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    //Checks to see if user is logged in, otherwise they are redirected to Login and the navbar doesn't load.
    //Works because the Header component is on every page, but not entirely sure if it's actually secure.

    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    const logOutButtonStyle = {
      cursor: 'pointer',
      fontSize: 18
    }

    //Can't use onClick with NavbarBrand component, so using an icon instead. Consider revamping the navbar later.
    // return (
    //   <header>
    //     <Navbar color="dark" dark expand="md">
    //       <NavbarBrand tag={NavLink} to="/" exact={true}>
    //         Home
    //       </NavbarBrand>
    //       <NavbarBrand tag={NavLink} to="/shop">
    //         Shop
    //       </NavbarBrand>
    //       <NavbarBrand tag={NavLink} to="/myitems">
    //         My Items
    //       </NavbarBrand>
    //       <NavbarBrand tag={NavLink} to="/myaccount">
    //         My Account
    //       </NavbarBrand> 
    //       <LogoutIcon htmlColor="red" style={logOutButtonStyle}  onClick={() => this.logOut()}/>
    //     </Navbar>
    //   </header>
    // );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);
