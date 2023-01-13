import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.dispatch(logout());
  }

  componentDidUpdate(prevProps) {
      this.props.history.push("/")
  }

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === true) {
      this.setState(this.logOut);
    }
    // else if (isLoggedIn === false){
    //   return <Redirect to="/"/>;
    // }
    return <div>ok</div>;
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn,
    user,
  };
}

export default connect(mapStateToProps)(LogoutPage);
