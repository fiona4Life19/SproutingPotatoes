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

    this.setState({score: num})

        for(let i = 0; i < num; i += 1) {
            let star = document.getElementById(`star${i}`)
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
      <div className="movie-review-form">
        <div className="modal-background">
          <div className="modal-child">
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

            <form onSubmit={this.handleSubmit}>
              <textarea
                cols="100"
                rows="15"
                value={this.state.body}
                onChange={this.handleUpdate("body")}
              />

              <button type="submit">Update </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  
  reviewBubble() {
    const { review, authors, updateReview } = this.props;

    const author_id = review.author_id;
    const author = authors[author_id];
    const first = author.first_name;
    const last = author.last_name;

    return (
      <div className="speech-bubble">
            <div className="review-inner">
                <p>{review.body} </p>
                <p className="review-score">
                    {" "}
                    🥔{review.score} {first} {last}{" "}
                </p>

                {this.props.currentUserId === author_id ? (
                    <button onClick={() => this.props.deleteReview(review.id)}>
                    Delete
                    </button>
                ) : null}
                {this.props.currentUserId === author_id ? (
                    <button onClick={() => this.setState({ open: true })}>
                    Update
                    </button>
                ) : null}
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