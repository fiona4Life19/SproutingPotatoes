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
        scoreString: "Rate this Movie."
    };

    this.hoverStars = this.hoverStars.bind(this);
    this.highlightStars = this.highlightStars.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToMovieShow = this.navigateToMovieShow.bind(this);
  }

  navigateToMovieShow() {
    const url = `/movies/${this.props.match.params.movieId}`;
    this.props.history.push(url);
  }

  highlightStars(num) {
    let ratingStrings = [
      "rate this movie",
      "Oof, that was rotten.",
      "Meh, it passed the time",
      "It's good - I'd reccommend it!",
      "Awesome!",
      "So Fresh: Absolute, must see!",
    ];

    this.setState({ score: num, scoreString: ratingStrings[num]});
    debugger
  
    for (let i = 0; i < num; i += 1) {
      let star = document.getElementById(`star${i}`);
      star.className = "yellow-btn fas fa-star fa-3x";
    }
    for (let i = num; i < 5; i += 1) {
      let star = document.getElementById(`star${i}`);
      star.className = "fas fa-star fa-3x";
    }
  }

    hoverStars(num) {
        let ratingStrings = [
          "rate this movie",
          "Oof, that was rotten.",
          "Meh, it passed the time",
          "It's good - I'd reccommend it!",
          "Awesome!",
          "So Fresh: Absolute, must see!",
        ];

        this.setState({scoreString: ratingStrings[num]})

        for (let i = 0; i < num; i += 1) {
            let star = document.getElementById(`star${i}`);
            star.className = "yellow-btn fas fa-star fa-3x";
        }
        for (let i = num; i < 5; i += 1) {
            let star = document.getElementById(`star${i}`);
            star.className = "fas fa-star fa-3x";
        }
    }

  handleSubmit(e) {
    e.preventDefault();

    // const review = parseInt(this.props.match.params.movieId)
    // const movieId = this.props.movieId
    const movieId = this.props.location.pathname.replace(/[^0-9]/g, "");
    const review = Object.assign({}, this.state, { movie_id: movieId });
    this.props.createReview(review).then(this.props.closeModal());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    let btn_class = !this.state.yellow ? "fa-star" : "yellow-btn";

    return (
      <div class="movie-review-form">
        <button
          id="star0"
          className={`${btn_class} fas fa-star fa-3x`}
          onMouseOver={() => this.hoverStars(1)}
          onClick={() => this.highlightStars(1)}
        ></button>
        <button
          id="star1"
          className={`${btn_class} fas fa-star fa-3x`}
          onMouseOver={() => this.hoverStars(2)}
          onClick={() => this.highlightStars(2)}
        ></button>
        <button
          id="star2"
          className={`${btn_class} fas fa-star fa-3x`}
          onMouseOver={() => this.hoverStars(3)}
          onClick={() => this.highlightStars(3)}
        ></button>
        <button
          id="star3"
          className={`${btn_class} fas fa-star fa-3x`}
          onMouseOver={() => this.hoverStars(4)}
          onClick={() => this.highlightStars(4)}
        ></button>
        <button
          id="star4"
          className={`${btn_class} fas fa-star fa-3x`}
          onMouseOver={() => this.hoverStars(5)}
          onClick={() => this.highlightStars(5)}
        ></button>

        <p>{this.state.scoreString}</p>

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