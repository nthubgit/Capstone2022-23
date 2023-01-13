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
import { retrieveSingleCart } from "../actions/carts";
import { Redirect } from "react-router-dom";
import CartListItem from "./CartListItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckoutModal from "./CheckoutModal";

import ShareLink from 'react-twitter-share-link';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

class CartPage extends Component {
  constructor(props) {
    super(props);
    
    this.discountedTotal = 0;
  }

  componentDidMount() {
    const { user: currentUser } = this.props;
    const getId = currentUser.id;
    console.log(getId);
    console.log("did mount");
    this.props.retrieveSingleCart(getId);
  }

  render() {
    const { carts } = this.props.carts;
    const { carts: discountedTotal } = this.props;
    console.log(discountedTotal.discountedTotal);
    // console.log(carts);
      /*Auth*/
      const { user: currentUser } = this.props;
      if (!currentUser) {
        return <Redirect to="/login" />;
      }

      const theme = createTheme();

      const TAX_RATE = 0.15;
      const invoiceSubtotal = discountedTotal.discountedTotal ? discountedTotal.discountedTotal : 0
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
                    <TableCell align="center" colSpan={4}>
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
                  {carts.map((card) => {
                    return <CartListItem key={card.id} {...card} />;
                  })}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={3}>Subtotal</TableCell>
                    <TableCell align="right">
                      ${ccyFormat(invoiceSubtotal)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                      0
                    )} %`}</TableCell>
                    <TableCell align="right" colSpan={2}>
                      ${ccyFormat(invoiceTaxes)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell align="right">
                      ${ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Container align="center">
            <CheckoutModal />
            
            <ShareLink link='http://localhost:3000/' text="I just spent on products!">
            {link => (
           <a href={link} target='_blank'>Share your expenses on Twitter!</a>
            )}
            </ShareLink>
                      
        
            </Container>
          </Box>
        </ThemeProvider>
      );
    
  }
}

function mapStateToProps(state) {
  const { carts } = state.carts;
  const { user } = state.auth;
  return {
    user,
    carts: state.carts,
  };
}

export default connect(mapStateToProps, { retrieveSingleCart })(CartPage);
