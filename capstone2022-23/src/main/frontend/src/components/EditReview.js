import React, { Component } from "react";
import moment from "moment";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { updateReview } from "../actions/reviews";
import { deleteReview } from "../actions/reviews";
import { TextField } from "@mui/material";

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeReviewText = this.onChangeReviewText.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.removeReview = this.removeReview.bind(this);

    this.state = {
      id: null,
      username: "",
      reviewText: "",
      rating: 1,
      itemId: "",

      submitted: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeReviewText(e) {
    this.setState({
      reviewText: e.target.value,
    });
  }

  onChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  saveReview() {
    // const { username, reviewText } = this.state;
    const { reviewText } = this.state;
    const { username } = this.props;
    const date = moment().format("YYYY-MM-DD");
    const id = this.props.id;

    var dataX = {
  
      username: username,
      reviewText: this.state.reviewText,
      rating: this.state.rating,
      createdAt: date,
    };

    this.props
      .updateReview(id, dataX)
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeReview() {
    const id = this.props.id;

    this.props
      .deleteReview(id)
      .then(() => {
        this.setState({
          submitted: true,
        });
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { username, products, reviews } = this.props;
    return (
      <div className="submit-form">
        <div>
          <TextField
            required
            id="reviewText"
            name="reviewText"
            label="Review"
            fullWidth
            multiline
            rows={4}
            autoComplete="given-name"
            variant="standard"
            value={this.state.reviewText}
            onChange={this.onChangeReviewText}
            required
          />

          <Container align="center">
            <Rating
              name="rating"
              value={this.state.rating}
              size="large"
              onChange={this.onChangeRating}
            />
          </Container>
            <Box sx={{m: 2}}align="center">
            <Button
              variant="contained"
              size = "large"
              onClick={this.saveReview}
            >
              Submit
            </Button>
            <Button
            variant="contained"
            size = "large"
            color = "error"
            onClick={this.removeReview}
          >
            Delete
          </Button>
            </Box>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username } = state.auth.user;
  const { products } = state;
  return {
    username,
    products,
  };
}

export default connect(mapStateToProps, { updateReview, deleteReview })(EditReview);
