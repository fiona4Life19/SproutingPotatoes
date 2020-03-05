
import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state) ;
        switch(action.type) {
            case RECEIVE_CURRENT_USER: 
                let nextState = {}
                nextState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
                return nextState
            default: 
                return state;
        }
}

export default usersReducer; 