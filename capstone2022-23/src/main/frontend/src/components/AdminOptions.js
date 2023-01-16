import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { updateProduct } from "../actions/products";
import { deleteProduct } from "../actions/products";
import { createProduct } from "../actions/products";

class AdminOptions extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleCreateProduct = this.handleCreateProduct.bind(this);


    this.state = {
      password: "",
      successful: false,
      message: "",
      submitted: false,
    };
  }

  handleCreateProduct() {
    const id = 1;
    const data = {
      title: "iPhone 867-5309",
      price: "222222",
      description: "This product was just created",
    };

    this.props
      .createProduct(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleUpdateProduct() {
    const id = 1;
    const data = {
      title: "This is the new title of the product",
    };

    this.props
      .updateProduct(id, data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleRemoveProduct() {
    const id = 1;

    this.props
      .deleteProduct(id)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleUpdateAccount() {
    const { user: currentUser } = this.props;
    const id = currentUser.id;
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

  render() {
    const { user: currentUser } = this.props;
    const { message } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
        <div>
        <Divider />
        <strong><h4>Admin Options</h4></strong>
        <h5>Test Product API (DummyJSON)</h5>
          <Box>
          <Button
          variant="contained"
          size="large"
          onClick={this.handleCreateProduct}
        >
            Create Test Product
        </Button>
            <Button
              variant="contained"
              size="large"
              onClick={this.handleUpdateProduct}
            >
                Update Test Product
            </Button>
              <Button
                variant="contained"
                size="large"
                onClick={this.handleRemoveProduct}
              >
                Remove Test Product
              </Button>
            </Box>
          </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps, { createProduct, updateProduct, deleteProduct })(
  AdminOptions
);
