import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_REVIEW } from "../actions/movie_actions"

const moviesReducer = (state = {}, action) => {
    Object.freeze(state) 
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_MOVIES: 
            return action.movies 
        case RECEIVE_MOVIE: 
            return action.payload.movie
        case RECEIVE_REVIEW: 
            nextState[action.review.id] = action.review
        default: 
            return state
    }
}  

export default moviesReducer