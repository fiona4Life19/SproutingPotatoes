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

    this.handleSubmit = this.handleSubmit(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.editReviewModal = this.editReviewModal.bind(this)
  }

 handleSubmit(e) {
    // e.preventDefault()
    // this.props.updateReview(this.state)
  }

  handleUpdate(field) {
      return e => this.setState({ [field]: e.currentTarget.value})
  }



  editReviewModal() {
      debugger
    return(
      <div className="modal-background">
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

                <form onSubmit={this.handleSubmit}>
                    <textarea
                        cols="100"
                        rows="15"
                        value={this.state.body}
                        onChange={this.handleUpdate("body")}
                    />
                    <button type="submit">
                        Update Review
                    </button>
                </form>
        </div>
    )

  }




  render() {
    if (!this.props.authors) {
        return null
    }
    const { review, authors, currentUserId} = this.props;
    debugger;

    const author_id = review.author_id;
    const author = authors[author_id];
    const first = author.first_name;
    const last = author.last_name;

        return (
          <div className="speech-bubble">
            {this.state.open ? 
              this.editReviewModal()
             : null}

            <p>{review.body} </p>
            <p className="review-score">
              {" "}
              🥔{review.score} {first} {last}{" "}
            </p>

            {currentUserId === author_id ? (
              <button onClick={() => this.props.deleteReview(review.id)}>
                Delete
              </button>
            ) : null}
            {currentUserId === author_id ? (
              <button onClick={() => this.setState({ open: true })}>
                Update
              </button>
            ) : null}
          </div>
        );
    }
}



export default ReviewIndexItem