import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW } from "../actions/review_actions" 
import { RECEIVE_MOVIE} from "../actions/movie_actions"


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    debugger
    switch(action.type) {
        case RECEIVE_MOVIE: 
            return action.payload.reviews
        case RECEIVE_REVIEWS: 
            return action.reviews
        case RECEIVE_REVIEW:
            debugger
            nextState[action.review.review.id] = action.review.review
            return nextState
        case DELETE_REVIEW: 
            delete nextState[action.reviewId]
            return nextState
        default: 
            return state;
    }
}

export default reviewsReducer