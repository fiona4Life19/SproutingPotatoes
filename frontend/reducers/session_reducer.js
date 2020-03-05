import { 
    RECEIVE_CURRENT_USER, 
    SIGNOUT_CURRENT_USER
} from "../actions/sessions_actions"

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER: 
            debugger
            const currentUser = action.currentUser
            return Object.assign({}, {currentUser: currentUser   })
        case SIGNOUT_CURRENT_USER:  
            return _nullUser  
        default: 
            return state;
    }
};

export default sessionReducer;
