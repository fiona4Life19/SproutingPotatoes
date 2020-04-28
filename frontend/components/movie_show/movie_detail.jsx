import React from "react"
import ReviewIndexItem from "../reviews/review_index_item"
import ActorsIndexItem from "../actors/actors_index_item"


class MovieDetail extends React.Component {
    constructor(props) {
        super(props) 

    }

    render() {
        if (!this.props.authors) {
            return null
        }
        debugger

        const {
            movie, 
            reviews, 
            actors, 
            authors, 
            currentUserId, 
            deleteReview, 
            openModal, 
            currentUser, 
            updateReview, 
            closeModal
        } 
        = this.props


        return (
          <div className="">
            <div className="upper-show">
              <img className="main-movie-pic" src={movie.photoUrl} alt="" />

              <iframe
                className="review-vid"
                width="460"
                height="515"
                src="https://www.youtube.com/embed/eQd4o3UWsvc"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                    picture-in-picture"
              ></iframe>
            </div>

            <div className="red-divider">
              <div className="detail-header-div">MOVIE INFO</div>
            </div>

            <div className="movie-info">
              <div className="movie-synopsis-container">
                <p className="movie-synopsis"> {movie.synopsis} </p>
              </div>

              <div className="movie-detail-container">
                <p className="movie-li-item">Genre: {movie.genre} </p>
                <p className="movie-li-item">
                  Release Date: {movie.release_date}
                </p>
                <p className="movie-li-item"> Average Score: {movie.score} </p>
                <p className="movie-li-item">Rating: {movie.rate} </p>
                <p className="movie-li-item">Runtime: {movie.runtime} </p>
              </div>
            </div>

            <div className="red-divider">
              <div className="detail-header-div">RATE AND REVIEW</div>
            </div>

            <div className="rate-review-container">
              <i className="WANT-TO-SEE-detail fas fa-plus-circle"> WANT TO SEE</i>

              <button
                className="review-button"
                onClick={() => openModal("review")}
              >
                <div className="review-button-star-div">
                  <div className="review-user-container">
                    <i className="review-user fas fa-user fa-3x"> </i>
                    <p className="review-button-name">
                      {" "}
                      {currentUser
                        ? `${
                            currentUser.first_name
                          } ${currentUser.last_name.slice(0, 1)}`
                        : null}{" "}
                    </p>
                  </div>

                  <div>
                    <i className="stars fas fa-star fa-3x"> </i>
                    <i className="stars" class="fas fa-star fa-3x"></i>
                    <i className="stars" class="fas fa-star fa-3x"></i>
                    <i className="stars" class="fas fa-star fa-3x"></i>
                    <i className="stars" class="fas fa-star fa-3x"></i>
                  </div>
                </div>

                <textarea
                  className="review-text"
                  cols="70"
                  rows="10"
                  value="What did you think of the movie?"
                />
              </button>
            </div>

            <div className="red-divider">
              <div className="detail-header-div">REVIEWS</div>
            </div>

            <div className="review-container">
              {reviews.map((review) => (
                <ReviewIndexItem
                  key={review.id}
                  review={review}
                  deleteReview={deleteReview}
                  authors={authors}
                  currentUserId={currentUserId}
                  updateReview={updateReview}
                  closeModal={closeModal}
                />
              ))}
            </div>

            <div className="red-divider">
              <div className="detail-header-div">CAST</div>
            </div>
            <div className="castings-container">
              {actors.map((actor) => (
                <ActorsIndexItem actor={actor} key={actor.id} />
              ))}
            </div>
          </div>
        );
    }
}

export default MovieDetail