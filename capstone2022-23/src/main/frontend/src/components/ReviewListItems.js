import React from "react";
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
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const ReviewListItem = ({
  dispatch,
  id,
  username,
  reviewText,
  createdAt,
  rating,
  itemId,
}) => (
  <Grid item xs={12}>
    <Item>
      {username}
      <br />
      {createdAt}
      <br />
      <Rating
      name="read-only"
      defaultValue={rating}
      precision={0.1}
      readOnly
      />
      <br />
      {reviewText}
    </Item>
  </Grid>
);
export default ReviewListItem;
