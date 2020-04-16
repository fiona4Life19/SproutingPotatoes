import {connect} from "react-redux"
import {fetchMovies, fetchMovie} from "../../actions/movie_actions"
import MovieIndex from "./movie_index"


const mSTP = (state) => ({
    movies: Object.values(state.entities.movies)
})

const mDTP = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})

export default connect(mSTP, mDTP)(MovieIndex)