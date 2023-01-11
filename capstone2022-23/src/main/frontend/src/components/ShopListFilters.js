import React from "react";
import { connect } from "react-redux";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Button from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import {
  setTextFilter,
  sortByPrice,
  sortByRating,
} from "../actions/filters";

class ShopListFilters extends React.Component {

//   onDatesChange = ({ startDate, endDate }) => {
//     this.props.dispatch(setStartDate(startDate));
//     this.props.dispatch(setEndDate(endDate));
//   };
//   onFocusChange = (calendarFocused) => {
//     this.setState(() => ({ calendarFocused }));
//   };

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
        label="Search field"
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
      }}
    >
      <MenuItem value="price">Price</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
    </Select>
    </FormControl>

        </Stack>
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
