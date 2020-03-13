import {RECEIVE_ACTOR, RECEIVE_MOVIE} from "../actions/movie_actions"


const ActorsReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_MOVIE: 
            return action.payload.actors
        default:
            return state;
    }
}


export default ActorsReducer 



