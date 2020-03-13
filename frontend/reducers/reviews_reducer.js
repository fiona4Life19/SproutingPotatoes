import { RECEIVE_REVIEW, RECEIVE_MOVIE} from "../actions/movie_actions" 


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_MOVIE: 
            return action.payload.reviews
        default: 
            return state;
    }
}

export default reviewsReducer