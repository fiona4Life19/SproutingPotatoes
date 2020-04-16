import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {fetchMovie} from "../../actions/movie_actions";
import MovieShow from "./movie_show"
import {deleteReview} from "../../actions/review_actions"


const mSTP = (state, ownProps) => ({

    movie: state.entities.movies[ownProps.match.params.movieId],
    reviews: Object.values(state.entities.reviews),
    actors: Object.values(state.entities.actors),
    authors: state.entities.users,
    currentUserId: state.session.currentUser.id,
    currentUser: state.entities.users[state.session.currentUser]
})

const mDTP = (dispatch) => ({
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})



export default withRouter(connect(mSTP, mDTP)(MovieShow))


