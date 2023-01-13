import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

import ReviewListItem from "./ReviewListItems";
import ReviewModal from "./ReviewModal";

import { retrieveSingleProduct } from "../actions/products";
import { retrieveReviewsOfProduct } from "../actions/reviews";

import { PRODUCTS_ERROR } from "../actions/types";
import AddReview from "./AddReview";
import EditReview from "./EditReview";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeAddReviewVisibility =
      this.onChangeAddReviewVisibility.bind(this);
    this.onChangeEditReviewVisibility =
      this.onChangeEditReviewVisibility.bind(this);

    this.state = {
      addReviewFormShown: false,
      addReviewButtonShown: true,
      editReviewShown: false,
      selectedReview: "",
    };
  }
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

  componentDidMount() {
    /*Auth*/
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    const getUserId = currentUser.id;

    const params = this.getQueryVariable("item");

    this.props.retrieveSingleProduct(params);
    this.props.retrieveReviewsOfProduct(params);
  }

  onChangeAddReviewVisibility(e) {
    this.setState({
      addReviewShown: true,
      addReviewButtonShown: false,
      editReviewShown: false,
    });
  }

  onChangeEditReviewVisibility(id) {
    this.setState({
      addReviewShown: false,
      addReviewButtonShown: true,
      editReviewShown: true,
      selectedReview: id
    });
  }

  render() {
    const { products } = this.props;
    const { reviews } = this.props;
    const { user: currentUser } = this.props;
    const imageProp = this.props.products.images;
    const theme = createTheme();
    const params = this.getQueryVariable("item");

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
                <Item>
                  Stock:
                  <br /> {products.stock}
                </Item>
              </Grid>
            </Grid>
            <br />
            <Divider />
            {/* Reviews*/}
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ marginTop: 16 }}
                >
                  Reviews
                </Typography>
              </Grid>
              {reviews.map((review) => {
                return (
                  <ReviewListItem
                    testFunction={this.onChangeEditReviewVisibility}
                    key={review.id}
                    {...review}
                  />
                );
              })}
            </Grid>
            {/* Add a Review Button: toggles the form. is shown when the form is hidden, and vice versa*/}
            {this.state.addReviewButtonShown && (
              <Box sx={{m: 2}}align="center">
              <Button
                variant="contained"
                size = "large"
                onClick={this.onChangeAddReviewVisibility}
              >
                Write a Review
              </Button>
              </Box>
            )}
            {/* Show Add Review Form if conditions are met*/}
            {this.state.addReviewShown && (
              <div>
                <br />
                <Divider />
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ marginTop: 16 }}
                >
                  Write a Review
                </Typography>
                <AddReview />
              </div>
            )}
            {/* Show Edit Review Form if conditions are met*/}
            {this.state.editReviewShown && (
              <div>
                <br />
                <Divider />
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                  style={{ marginTop: 16 }}
                >
                  Edit a Review
                </Typography>
                <EditReview id={this.state.selectedReview}/>
              </div>
            )}
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { products } = state.products;
  const { reviews } = state.reviews;
  return {
    products: state.products,
    user,
    reviews: state.reviews,
  };
}

export default connect(mapStateToProps, {
  retrieveReviewsOfProduct,
  retrieveSingleProduct,
})(ProductPage);
