import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {fetchMovie} from "../../actions/movie_actions";
import MovieShow from "./movie_show"
import {deleteReview} from "../../actions/review_actions"
import {openModal} from "../../actions/modal_actions"


const mSTP = (state, ownProps) => {
    debugger
    return{
    movieId: ownProps.match.params.movieId,
    movie: state.entities.movies[ownProps.match.params.movieId],
    reviews: Object.values(state.entities.reviews),
    actors: Object.values(state.entities.actors),
    authors: state.entities.users,
    currentUserId: state.session.currentUser ? state.session.currentUser.id : null,
    }
}

const mDTP = (dispatch) => ({
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    openModal: (modal) => dispatch(openModal(modal))
})



export default withRouter(connect(mSTP, mDTP)(MovieShow))


