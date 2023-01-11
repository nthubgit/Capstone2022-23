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
import { retrieveProducts } from "../actions/products";
import { Redirect } from 'react-router-dom';
import ShopListFilters from "./ShopListFilters";
import selectProducts from "../selectors/products";

class ShopPage extends Component {
  fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        dispatch({
          type: ActionTypes.PRODUCTS_ERROR,
          payload: err,
        });
        console.log("Err", err);
      });
    this.props.dispatch(retrieveProducts(response.data));
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    /*Auth*/
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    const { products } = this.props;
    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Shop
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>

                <ShopListFilters />

            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {products.map((card) => {
                return <ShopListItem key={card.id} {...card} />;
              })}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { products } = state.products;
  const { user } = state.auth;
  return {
    // products,
    user,
    products: selectProducts(state.products.products, state.filters),
  };
};

export default connect(mapStateToProps)(ShopPage);
