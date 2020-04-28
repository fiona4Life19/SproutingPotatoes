import React from "react"


class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);

    this.state ={
        open: false, 
        id: this.props.review.id,
        score: this.props.review.score, 
        body: this.props.review.body
    }    

    this.highlightStars = this.highlightStars.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.editReviewModal = this.editReviewModal.bind(this)
    this.reviewBubble = this.reviewBubble.bind(this)
  }

  handleUpdate(field) {
      debugger
      return e => this.setState({ [field]: e.currentTarget.value})
  }

  handleSubmit(e) {
      e.preventDefault()
      this.props.updateReview(this.state)
      .then(() => this.setState({open: false}))  
  }

  highlightStars(num) {

    debugger
    this.setState({score: num})

        for(let i = 0; i < num; i += 1) {
            let star = document.getElementById(`star${i}`)
            debugger
            star.className="yellow-btn fas fa-star fa-3x"
        }
        for(let i = num; i < 5; i += 1) {
            let star = document.getElementById(`star${i}`)
            star.className="fas fa-star fa-3x"
        }  
  }

  editReviewModal() {
    let btn_class = !this.state.yellow ? "fa-star" : "yellow-btn"

    return (
      <div className="modal-background">
        <div className="modal-child">
          <div className="movie-review-form">
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
                onChange={this.handleUpdate("body")}
              />

              <button className="submit-button" type="submit">Submit </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  starScore(score) {
      let roundedScore = Math.round(score);
      let starArray = [];
      for(let i = 0; i < roundedScore; i += 1) {
        starArray.push( <i className="yellow-btn fas fa-star"></i> );
      }

      for(let i = 0; i < 5 - roundedScore; i += 1) {
          starArray.push(<i class="fas fa-star"></i>);
      }

      return starArray
  }
  
  
  reviewBubble() {
    const { review, authors, updateReview } = this.props;

    const author_id = review.author_id;
    const author = authors[author_id];
    const first = author.first_name;
    const last = author.last_name;

    return (
      <div>
        <div className="speech-bubble">
          <div className="review-inner">
            <p className="review-score">{this.starScore(review.score)}</p>
            <p className="review-speech-bubble-text">{review.body} </p>

            {this.props.currentUserId === author_id ? (
              <button
                className="edit-delete-buttons"
                onClick={() => this.props.deleteReview(review.id)}
              >
                Delete
              </button>
            ) : null}
            {this.props.currentUserId === author_id ? (
              <button
                className="edit-delete-buttons"
                onClick={() => this.setState({ open: true })}
              >
                Update
              </button>
            ) : null}
          </div>
        </div>
        <div className="subreview-div">
          <i class="fas fa-user-circle fa-3x"></i> 
          <p className="review-name">{first} {last} </p>
        </div>
      </div>
    );
  }



  render() {
    if (!this.props.authors) {
        return null
    }
        return (
          <div>
            {this.state.open ? this.editReviewModal() : this.reviewBubble()}
          </div>
        );
    }
}



export default ReviewIndexItem