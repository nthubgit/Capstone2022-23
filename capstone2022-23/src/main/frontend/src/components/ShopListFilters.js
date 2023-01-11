import React from "react";
import { connect } from "react-redux";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Button from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {
  setTextFilter,
  setCategoryFilter,
  sortByPrice,
  sortByPriceLow,
  sortByRating,
  sortByRatingLow,
} from "../actions/filters";

const categories = ["Smartphones","Laptops","Fragrances","Skincare","Groceries","Home-decoration","Furniture","Tops","Womens-dresses","Womens-shoes","Mens-shirts","Mens-shoes","Mens-watches","Womens-watches","Womens-bags","Womens-jewellery","Sunglasses","Automotive","Motorcycle","Lighting"];


class ShopListFilters extends React.Component {

  render() {
    return (
      <div>
      <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <TextField
        id="outlined-search"
        label="Search Filter"
        type="search"
        onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }}
      />
      <FormControl fullWidth>
      <InputLabel id="sort-by-select-label">Sort By</InputLabel>
      <Select
      labelId="sort-by-select-label"
      id="sort-by-select"
      value={this.props.filters.sortBy}
      label="Sort By"
      onChange={(e) => {
        if (e.target.value === "price") {
          this.props.dispatch(sortByPrice(e.target.value));
        } else if (e.target.value === "rating") {
          this.props.dispatch(sortByRating(e.target.value));
        }
        else if (e.target.value === "price_low") {
            this.props.dispatch(sortByPriceLow(e.target.value));
          }
          else if (e.target.value === "rating_low") {
            this.props.dispatch(sortByRatingLow(e.target.value));
          }
      }}
    >
      <MenuItem value="price">Price (High to Low)</MenuItem>
      <MenuItem value="price_low">Price (Low to High)</MenuItem>
      <MenuItem value="rating">Rating (High to Low)</MenuItem>
      <MenuItem value="rating_low">Rating (Low to High)</MenuItem>
    </Select>
    </FormControl>
        </Stack>
    {/*Category Radio Group */}
    <Card variant="outlined">
    <CardContent>
        <FormControl>
        <FormLabel id="categories-radio-buttons-group-label">Categories</FormLabel>
        <RadioGroup
          aria-labelledby="categories-radio-buttons-group-label"
          defaultValue=""
          onChange={(e) => {
            this.props.dispatch(setCategoryFilter(e.target.value));
            console.log(e.target.value);
          }}
          name="radio-buttons-group"
          row
        >
        <FormControlLabel key="None" value="" control={<Radio />} label="None" />
        {categories.map((category) => (
            <FormControlLabel key={category} value={category} control={<Radio />} label={category} />
        ))}
        </RadioGroup>
      </FormControl>
      </CardContent>
      </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ShopListFilters);
