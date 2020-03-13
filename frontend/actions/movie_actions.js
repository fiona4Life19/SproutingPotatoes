import * as APIUtil from "../util/movie_api_util"
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ACTOR = "RECEIVE_ACTOR"


const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies
})

const receiveMovie = (payload)  => ({
    type: RECEIVE_MOVIE, 
    payload
})

const receiveReview = ({review, average_rating, author}) =>  ({
    type: RECEIVE_REVIEW, 
    review, 
    average_rating, 
    author
})

export const createReview = (review) => dispatch => {
    return APIUtil.createReview(review) 
    .then((review) => dispatch(receiveReview(review)))
}
 
export const fetchMovies = () => dispatch => {
    return APIUtil.fetchMovies() 
    .then((movies) => dispatch(receiveMovies(movies)))
}

export const fetchMovie = (id) => dispatch => {
    return APIUtil.fetchMovie(id)
    .then((payload) => dispatch(receiveMovie(payload)))
}




