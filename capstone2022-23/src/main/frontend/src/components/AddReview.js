import React, { Component } from "react";
import moment from "moment";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { createReview } from "../actions/reviews";
import { TextField } from "@mui/material";

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeReviewText = this.onChangeReviewText.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.saveReview = this.saveReview.bind(this);

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
    const { id } = this.props;
    const { username } = this.props;
    const { products } = this.props;
    const date = moment().format("YYYY-MM-DD");

    var dataX = {
      user_id: id,
      username: username,
      reviewText: this.state.reviewText,
      rating: this.state.rating,
      createdAt: date,
      itemId: products.id,
    };

    this.props
      .createReview(id, dataX)
      .then(() => {
        this.setState({
          submitted: true,
        });
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { username, products } = this.props;
    console.log(products.id);
    return (
      <div className="submit-form">
        <div>
          <div className="form-group">
            <TextField
              required
              id="username"
              name="username"
              label="Username"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={username}
              onChange={this.onChangeUsername}
              required
              disabled
            />
          </div>

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
          <Container align="center">
          <Button
          variant="contained"
          size = "large"
          onClick={this.saveReview}
        >
          Submit
        </Button>
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { id } = state.auth.user;
  const { username } = state.auth.user;
  const { products } = state;
  return {
    id,
    username,
    products,
  };
}

export default connect(mapStateToProps, { createReview })(AddReview);
