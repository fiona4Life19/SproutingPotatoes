import React from "react"
// import ReviewListItem from "../reviews/review_list_item"
import { ProtectedRoute } from "../../util/route_util"
import { ReviewLink } from "../../util/link_util"
import ReviewFormContainer from "../reviews/review_form_container"
import ReviewForm from "../reviews/review_form"
import { deleteReview } from "../../actions/review_actions"

// const reviewList = (reviews) => (
//     reviews.map(review => (
//         <ReviewListItem
//             review={review}
//             key={review.id}
//         />
//     ))
// )

const MovieDetail = ({movie, reviews, actors, authors, currentUserId, currentUser, deleteReview}) => {


    const reviewinfo = reviews.map(review => {
        debugger
        const author_id = review.author_id
        const author = authors[author_id]
        const first = author.first_name
        const last = author.last_name
        
        return (<div className="speech-bubble">
            <p>{review.body} </p>
            <p className="review-score"> 🥔{review.score} {first} {last} </p>

            { currentUserId === author_id ? (
                <button onClick={() => deleteReview(review.id)}>Delete</button>
            ):(
            null
            )}

        </div> )
        }

    )

    const actorsInfo = actors.map((actor) => <div className="actors-container">
                                                <img className="actor-pic" src={actor.photoUrl} alt=""/>
                                                <span className="actor-info">{actor.first_name} {actor.last_name} </span>
                                            </div>
    )
    return(
        <div>

            <img className="main-movie-pic" src={movie.photoUrl} alt=""/>

            <div className="movie-info-review">
                <div className="movie-info">
                <ul className="movie-li"> 
                    <h1>{movie.title}</h1>
                        <li className="movie-li-item">Synopsis: {movie.synopsis}</li>
                        <li className="movie-li-item">Genre: {movie.genre} </li>
                        <li className="movie-li-item">Release Date: {movie.release_date}</li>
                        <li className="movie-li-item">Average Score: {movie.score}</li>
                        <li className="movie-li-item">Rating: {movie.rate}</li>
                        <li className="movie-li-item">Runtime: {movie.runtime}</li>
                </ul>
            </div>
                    <div className="right-half-show">
                        <ReviewLink
                            component={ReviewFormContainer}
                            to={`/movies/${movie.id}/review`}
                            label="Write a Review"
                        />
                        <ProtectedRoute
                            path="/movies/:movieId/review"
                            component={ReviewFormContainer}
                        />
                    </div>
            </div>
            


            <h1 className="movie-detail-header" >Reviews </h1>
            <div className="review-container">
                {reviewinfo}
            </div>
            
            <h1 className="movie-detail-header">Cast </h1>
            <div className="castings-container">
                {actorsInfo}
            </div>
        </div>
    )
}

export default MovieDetail