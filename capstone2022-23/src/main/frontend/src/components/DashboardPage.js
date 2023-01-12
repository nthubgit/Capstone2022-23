import React, { Component } from "react";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import { retrieveSingleProduct } from "../actions/products";
import { Redirect } from "react-router-dom";
import ShopListItem from "./ShopListItem";

const theme = createTheme();

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    //gets a random num from 1-100 to fetch a random product
    const params = Math.floor(Math.random() * 100) + 1;
    this.props.retrieveSingleProduct(params);
  }

  render() {
    const { products } = this.props;
    console.log ( products.products )
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
                Dashboard
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                This is a simple mock e-commerce website. Following a successful
                login, users gain access to the Shop page, where they can
                view/search/sort products, the Cart page, where they can view
                their shopping cart, and the Account page, where they can view
                info pertaining to their session. Product and cart data are
                sourced from the DummyJSON API.
              </Typography>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Random Product
              </Typography>
              </Container>
              <Container sx={{ py: 4 }} maxWidth="sm">
              <ShopListItem 
              id={products.id}
              title={products.title}
              description={products.description}
              price={products.price}
              rating={products.rating?products.products.rating :""}
              thumbnail={products.thumbnail}
              />

            </Container>
            
          </Box>
        </main>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { products } = state.products;
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { retrieveSingleProduct })(
  DashboardPage
);
