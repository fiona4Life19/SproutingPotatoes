
import { RECEIVE_CURRENT_USER} from '../actions/sessions_actions';
import { RECEIVE_MOVIE } from "../actions/movie_actions"

const usersReducer = (state = {}, action) => {
    Object.freeze(state) ;
        switch(action.type) {
            case RECEIVE_CURRENT_USER: 
                let nextState = {}
                nextState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
                return nextState
            case RECEIVE_MOVIE:
                return action.payload.users
            default: 
                return state;
        }
}

export default usersReducer; 