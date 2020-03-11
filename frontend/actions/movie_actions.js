import * as APIUtil from "../util/movie_api_util"
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";


const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies
})

export const fetchMovies = () => dispatch => {
    return APIUtil.fetchMovies() 
    .then((movies) => dispatch(receiveMovies(movies)))
}




