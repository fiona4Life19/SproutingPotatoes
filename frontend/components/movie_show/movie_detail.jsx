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
          <div>
            <img className="main-movie-pic" src={movie.photoUrl} alt="" />

            <iframe
              className="review-vid"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eQd4o3UWsvc"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                    picture-in-picture"
            ></iframe>

            <div className="movie-info-review">
              <div className="movie-info">
                <ul className="movie-li">
                  <h1>{movie.title}</h1>
                  <li className="movie-li-item">Synopsis: {movie.synopsis}</li>
                  <li className="movie-li-item">Genre: {movie.genre} </li>
                  <li className="movie-li-item">
                    Release Date: {movie.release_date}
                  </li>
                  <li className="movie-li-item">
                    Average Score: {movie.score}
                  </li>
                  <li className="movie-li-item">Rating: {movie.rate}</li>
                  <li className="movie-li-item">Runtime: {movie.runtime}</li>
                </ul>

                <i class="fas fa-plus-circle"> Wants to See</i>
              </div>
              <button
                className="review-button"
                onClick={() => openModal("review")}
              >
                {currentUser
                  ? `${currentUser.first_name} ${currentUser.last_name}`
                  : null}

                <div>
                  <i className="stars fas fa-star fa-3x">
                    {" "}
                  </i>
                  <i className="stars" class="fas fa-star fa-3x">
                    {" "}
                  </i>
                  <i className="stars" class="fas fa-star fa-3x">
                    {" "}
                  </i>
                  <i className="stars" class="fas fa-star fa-3x">
                    {" "}
                  </i>
                  <i className="stars" class="fas fa-star fa-3x">
                    {" "}
                  </i>
                </div>

                <textarea
                  diab
                  cols="100"
                  rows="15"
                  value="What did you think of the movie?"
                />
              </button>
            </div>

            <h1 className="movie-detail-header">Reviews </h1>
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

            <h1 className="movie-detail-header">Cast </h1>
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