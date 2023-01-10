import React, { Component, useEffect } from "react";
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
import { connect, useDispatch, useSelector } from "react-redux";
import ShopListItem from "./ShopListItem";
import axios from "axios";
import { retrieveProducts } from "../actions/products";

class ShopPage extends Component {

  fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
        dispatch( {
            type: ActionTypes.PRODUCTS_ERROR,
            payload: err,
        })
        console.log("Err", err);
    });
    dispatch(retrieveProducts(response.data));
    console.log(response.data);
};


useEffect(() => {
  fetchProducts();
}, []);
console.log(products);

  render() {
    const products = useSelector(state => state);
  const dispatch = useDispatch();

  
 
  return (
      <div className="ui grid container">

      </div>
  );
  }
  
};

export default ShopPage;

// function mapStateToProps(state) {
//   const { message } = state.message;
//   return {
//     message,
//   };
// }

// export default connect(mapStateToProps)(ShopPage);
