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

    this.handleUpdate = this.handleUpdate.bind(this)
    this.editReviewModal = this.editReviewModal.bind(this)
    this.reviewBubble = this.reviewBubble.bind(this)
  }

  handleUpdate(field) {
      debugger
      return e => this.setState({ [field]: e.currentTarget.value})
  }

  editReviewModal() {
      debugger
    return (
      <div className="modal-background">
        <form>
          <i className="stars" class="fas fa-star ">
            {" "}
          </i>
          <i className="stars" class="fas fa-star ">
            {" "}
          </i>
          <i className="stars" class="fas fa-star ">
            {" "}
          </i>
          <i className="stars" class="fas fa-star ">
            {" "}
          </i>
          <i className="stars" class="fas fa-star ">
            {" "}
          </i>

          <textarea
            cols="100"
            rows="15"
            value={this.state.body}
            onChange={this.handleUpdate("body")}
          />
          <button onClick={() => this.props.updateReview(this.state)
                            .then(() => this.setState({open: false}))
            }>Update Review</button>
        </form>
      </div>
    );
  }
  
  reviewBubble() {
    const { review, authors, updateReview } = this.props;

    const author_id = review.author_id;
    const author = authors[author_id];
    const first = author.first_name;
    const last = author.last_name;

    return(
      <div className="speech-bubble">
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
    )
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