//convert this over to listings when doing auth

import React, { Component } from "react";
import { connect } from "react-redux";
import 'regenerator-runtime/runtime';
import { createAccount } from "../actions/accounts";

class AddAccountPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveAccount = this.saveAccount.bind(this);
    this.newAccount = this.newAccount.bind(this);

    this.state = {
      id: null,
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
  }
}

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangeDOB(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  saveAccount() {
    const { title, description } = this.state;

    this.props
      .createAccount(title, description)
      .then((data) => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          dob: data.dob,
          email: data.email
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newAccount() {
    this.setState({
      id: null,
      firstName: '',
      lastName: '',
      dob: '',
      email: '',  
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                  name="firstName"
                />
              </div>
              <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>
  
              <div className="form-group">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="dob"
                  className="form-control"
                  id="dob"
                  required
                  value={this.state.dob}
                  onChange={this.onChangeDOB}
                  name="dob"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>
  
              <button onClick={this.saveAccount} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}


export default connect(null, { createAccount })(AddAccountPage);
