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
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

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
    const productx = { products: response.data };
    console.log(productx);
    this.props.dispatch(retrieveSingleProduct(productx));
  };

  //used to get the query variable from the URL which will be used as the ID for the GET
  getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  };

  setFalse = () => {
    this.setState({ loading: false });
  };

  componentDidMount() {
    /*Auth*/
    const { user: currentUser } = this.props;
    console.log("compdidmount");
    // console.log({ products });
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    this.fetchSelectedProduct();
  }

  render() {
    const { products } = this.props;
    const imageProp = this.props.products.images;
    const theme = createTheme();
    console.log("render");
    console.log({ products });
    const images = [
      // imageProp[4],
      // imageProp[0],
      // imageProp[1],
      // imageProp[2],
      // imageProp[3],
    ];
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Title */}
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  {products.title}
                </Typography>
              </Grid>
              {/* Image */}
              <Grid item xs={4}>
                <Item>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: ".25%",
                    }}
                    image={products.thumbnail}
                    alt="random"
                  />
                </Item>
              </Grid>
              {/* Details*/}
              <Grid item xs={8}>
                <Item>
                  <Typography component="h1" variant="h4">
                    Brand:
                    <br />
                  </Typography>
                  {products.brand}
                  <br />
                  <Typography component="h1" variant="h4">
                    Category:
                    <br />
                  </Typography>
                  {products.category}
                  <br />
                  <Typography component="h1" variant="h4">
                    Description:
                    <br />
                  </Typography>
                  {products.description}
                </Item>
              </Grid>
              {/* Price*/}
              <Grid item xs={4}>
                <Item>
                Price:
                <br />
                  <s>${products.price}</s>
                  <br />
                  {products.discountPercentage}% OFF!
                </Item>
              </Grid>
              {/* Rating*/}
              <Grid item xs={4}>
                <Item>
                Rating:
                <br />
                  <Rating
                    name="read-only"
                    defaultValue={products.rating}
                    precision={0.1}
                    readOnly
                  />
                </Item>
              </Grid>
              {/* QTY*/}
              <Grid item xs={4}>
                <Item>Stock:
                <br /> {products.stock}</Item>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { products } = state.products;
  const { loading } = state.products.loading;
  return {
    products,
    user,
  };
}

export default connect(mapStateToProps)(ProductPage);
