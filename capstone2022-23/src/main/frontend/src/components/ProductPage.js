import React, { Component } from "react";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import ShopListItem from "./ShopListItem";
import axios from "axios";
import { retrieveSingleProduct } from "../actions/products";
import { Redirect } from "react-router-dom";
import { PRODUCTS_ERROR } from "../actions/types";

class ProductPage extends Component {
  fetchSelectedProduct = async () => {
    const { user: currentUser } = this.props;
    const path = "https://dummyjson.com/products/";
    const params = this.getQueryVariable("item");
    const concatPath = path.concat("", params);
    const response = await axios.get(concatPath).catch((err) => {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: err,
      });
      console.log("Err", err);
    });
    console.log(response.data);
    //the getOne response is formatted differently than when getAll, so it's easier
    //to work with if reformatted into "products:" for uniformity
    const productx={products: response.data};
    console.log(productx);
    this.props.dispatch(retrieveSingleProduct(productx));
  };

  //used to get the query variable from the URL which will be used as the ID for the GET
  getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }

  componentDidMount() {
    /*Auth*/
    const { user: currentUser } = this.props;

    // console.log({ products });
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    this.fetchSelectedProduct();
  }

  render() {
    const { products } = this.props;
    const theme = createTheme();

    return (
        <div>{products.title}</div>
    );
  };
};

function mapStateToProps(state) {
  const { user } = state.auth;
  const { products } = state.products;
  return {
    products,
    user,
  };
}

export default connect(mapStateToProps)(ProductPage);
