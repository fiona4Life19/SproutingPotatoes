
// import {connect} from "react-redux";
// import MovieGenreIndex from "./movie_index";
// import {fetchMovies} from "../../actions/movie_actions"

// const mSTP = (state, ownProps) => {

//     const movies = Object.values(state.entities.movies) 
//     let movieArray = [];
//         for (let i = 0; i < movies.length; i++) {
//             let movie = movies[i];
//             if (ownProps.genre === movie.genre) 
//                 movieArray.push(movie);
//         }
//     return {
//         movies: movieArray,
//         genre: genre

//     } 
// }

// const mDTP = (dispatch) => {
//     return {
//         fetchMovies: () => dispatch(fetchMovies())
//     }
// }

// export default connect(mSTP, mDTP)(MovieGenreIndex)