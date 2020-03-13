import {connect} from "react-redux";
import {fetchMovie} from "../../actions/movie_actions";
import MovieShow from "./movie_show"
import {selectReviewsForMovie, selectMovie, selectActorsForMovie} from "../../reducers/selector"


const mSTP = (state, ownProps) => {
    const reviews = selectReviewsForMovie(state, ownProps.match.params.movieId)
    const movie = selectMovie(state, ownProps.match.params.movieId)
    const actors = Object.values(state.entities.actors)
    const authors = state.entities.users
    return{
        movieId: state.entities.movies[ownProps.match.params.movieId],
        reviews: reviews,
        movie: movie,
        actors: actors,
        authors: authors
    }
}

const mDTP = (dispatch) => ({
    fetchMovie: (id) => dispatch(fetchMovie(id))
})

export default connect(mSTP, mDTP)(MovieShow)


