import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveCurrentUser = currentUser => {
    return { 
        type: RECEIVE_CURRENT_USER, 
        currentUser 
    }
}

const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER, 
})

const receiveErrors = errors => ({ 
    type: RECEIVE_SESSION_ERRORS, 
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})
  

export const signup = user => dispatch => ( 
    APIUtil.signup(user)
    .then(
        user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const signin = user => dispatch => (
    APIUtil.signin(user).then( (user) =>  ( dispatch(receiveCurrentUser(user))
    ), err => ( 
        dispatch(receiveErrors(err.responseJSON))
    ))
)

export const signout = () => dispatch => ( 
    APIUtil.signout().then( (user) =>  ( 
        dispatch(signoutCurrentUser())
    ))
)
 

