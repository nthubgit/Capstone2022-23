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
import { retrieveProducts, retrieveSingleProduct } from "../actions/products";
import { Redirect } from "react-router-dom";
import CartListItem from "./CartListItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

class CartPage extends Component {
  fetchCart = async () => {
    const { user: currentUser } = this.props;
    const path = "https://dummyjson.com/carts/";
    const getId = currentUser.id;
    const concatPath = path.concat("", getId);
    
    const response = await axios.get(concatPath).catch((err) => {
      dispatch({
        type: ActionTypes.PRODUCTS_ERROR,
        payload: err,
      });
      console.log("Err", err);
    });
    console.log(response.data);
    this.props.dispatch(retrieveSingleProduct(response.data));
  };

  componentDidMount() {
    this.fetchCart();
  }

  render() {
    /*Auth*/
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    const { products } = this.props;
    console.log({ products });
    const theme = createTheme();

    
    const TAX_RATE = 0.15;
    const invoiceSubtotal = 144;
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

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
                {this.props.user.username}'s Cart
              </Typography>
            </Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Details
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Orig. Price</TableCell>
                    <TableCell align="right">Discount</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((card) => {
                    return <CartListItem key={card.id} {...card} />;
                  })}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={3}>Subtotal</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceSubtotal)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                      0
                    )} %`}</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTaxes)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
  
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { products } = state.products;
  return {
    user,
    products,
  };
}

export default connect(mapStateToProps)(CartPage);
