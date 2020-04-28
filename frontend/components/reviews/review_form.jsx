import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // score: this.props.review.score ? this.props.review.score : null,
      // body: this.props.review.body ? this.props.review.body : ""
      score: 5,
      body: "",
    };

    this.highlightStars = this.highlightStars.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToMovieShow = this.navigateToMovieShow.bind(this);
  }

  navigateToMovieShow() {
    const url = `/movies/${this.props.match.params.movieId}`;
    this.props.history.push(url);
  }

  highlightStars(num) {
      debugger
    this.setState({ score: num });

    for (let i = 0; i < num; i += 1) {
      let star = document.getElementById(`star${i}`);
      debugger
      star.className = "yellow-btn fas fa-star fa-3x";
    }
    for (let i = num; i < 5; i += 1) {
      let star = document.getElementById(`star${i}`);
      star.className = "fas fa-star fa-3x";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;

    // const review = parseInt(this.props.match.params.movieId)
    // const movieId = this.props.movieId
    const movieId = this.props.location.pathname.replace(/[^0-9]/g, "");
    const review = Object.assign({}, this.state, { movie_id: movieId });
    debugger;
    this.props.createReview(review).then(this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  function() {
    $(".fa-star").hover(function () {
      $(".fa-star").addClass("show");
    });

    $(".fa-star").mouseleave(function () {
      $(".fa-star").removeClass("show");
    });
  }

  render() {
    let btn_class = !this.state.yellow ? "fa-star" : "yellow-btn";

    return (
      <div class="movie-review-form">

        <button
          id="star0"
          className={`${btn_class} fas fa-star fa-3x`}
          onClick={() => this.highlightStars(1)}
        ></button>
        <button
          id="star1"
          className={`${btn_class} fas fa-star fa-3x`}
          onClick={() => this.highlightStars(2)}
        ></button>
        <button
          id="star2"
          className={`${btn_class} fas fa-star fa-3x`}
          onClick={() => this.highlightStars(3)}
        ></button>
        <button
          id="star3"
          className={`${btn_class} fas fa-star fa-3x`}
          onClick={() => this.highlightStars(4)}
        ></button>
        <button
          id="star4"
          className={`${btn_class} fas fa-star fa-3x`}
          onClick={() => this.highlightStars(5)}
        ></button>

        <p className="reviewform-question"> What did you think of the movie?</p>

        <form onSubmit={this.handleSubmit}>
          <textarea
            className="review-text"
            cols="70"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />

          <input className="submit-button" type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm)