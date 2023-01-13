import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AdminOptions from "./AdminOptions";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { updateAccount } from "../actions/accounts";
import { deleteAccount } from "../actions/accounts";

class MyAccountPage extends Component {

  constructor(props) {
    super(props);
    this.handleUpdateAccount = this.handleUpdateAccount.bind(this);
    this.handleRemoveAccount = this.handleRemoveAccount.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      password: "",
      successful: false,
      message: "",
    };
  }


  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleUpdateAccount() {
    const { user: currentUser } = this.props;
    const id = currentUser.id
    const password = this.state.password;

    this.props
      .updateAccount(id, password)
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleRemoveAccount() {
    const { user: currentUser } = this.props;
    const id = currentUser.id

    this.props
      .deleteAccount(id)
      .then(() => {
        this.setState({
          submitted: true,
        });
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    const { user: currentUser } = this.props;
    const { message } = this.props;
    const showAdminCheck = currentUser.roles.includes("ROLE_ADMIN");

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <Divider />
        <strong><h4>Options</h4></strong>
        <h5>Change password</h5>
        <div className="submit-form">
        <div>
          <div className="form-group">
            <TextField
              required
              id="password"
              name="password"
              label="Password (6 or more characters)"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={this.onChangePassword}
              required
            />
          </div>
          <Button
          variant="contained"
          size = "large"
          onClick={this.handleUpdateAccount}
        >
          Submit
        </Button>
        <h5>Delete Account</h5>
        <div className="submit-form">
          <Button
          variant="contained"
          size = "large"
          onClick={this.handleRemoveAccount}
        >
          Submit
        </Button>
        
        </div>
        </div>
      </div>
      {showAdminCheck && <AdminOptions />}
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { message } = state.message;
  return {
    user,
    message
  };
}

export default connect(mapStateToProps, { updateAccount,  deleteAccount } )(MyAccountPage);
