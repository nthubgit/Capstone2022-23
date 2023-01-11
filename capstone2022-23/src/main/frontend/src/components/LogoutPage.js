import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class LogoutPage extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    };

    logOut() {
        this.props.dispatch(logout());
      }

      componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState(this.logOut);
        }
      }

render() {

    return (
<div>ok</div>
    );
  }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }
  
  export default connect(mapStateToProps)(LogoutPage);