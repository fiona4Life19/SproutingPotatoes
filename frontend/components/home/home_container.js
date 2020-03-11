import {connect} from "react-redux"
import Home from "./home"
import {fetchMovies} from "../../actions/movie_actions"


const mSTP = (state) => ({
    movies: Object.values(state.entities.movies)
})

const mDTP = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mSTP, mDTP)(Home)