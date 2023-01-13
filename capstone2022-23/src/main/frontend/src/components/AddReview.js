import React, { Component } from "react";
import moment from 'moment';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
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
    this.newReview = this.newReview.bind(this);

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
    const { id } = this.props;
    console.log(id)
    this.setState({
      reviewText: e.target.value,
    });
    console.log(this.state)
  }

  onChangeRating(e) {
    console.log(e.target.value)
    this.setState({
      rating: e.target.value,
    });
    console.log(this.state)
  }

  saveReview() {
    const { username, reviewText } = this.state;
    const { id } = this.props;
    const { products } = this.props;
    const date = moment().format("YYYY-MM-DD");

    var dataX = {
        username: this.state.username,
        reviewText: this.state.reviewText,
        rating: this.state.rating,
        createdAt: date,
        itemId: products.id
      };

    this.props
      .createReview(id, dataX)
      .then((data) => {
        this.setState({
          id: id,
          username: username,
          reviewText: data.reviewText,
          published: data.published,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newReview() {
    this.setState({
      id: null,
      username: "",
      reviewText: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    const { username, products } = this.props;
    console.log(products.id);
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
            <div className="alert alert-success" role="alert">
            Review successfully posted. Please refresh, or press button to add another review.
          </div>
              <button className="btn btn-success" onClick={this.newReview}>
                Add
              </button>
            </div>
          ) : (
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
                value= {username}
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
          <button onClick={this.saveReview} className="btn btn-success">
          Submit
        </button>
        </Container>

            </div>
          )}
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
      products
    };
  }
  
  export default connect(mapStateToProps, { createReview })(AddReview);
