import {OPEN_MODAL, CLOSE_MODAL, OPEN_EDIT_MODAL} from "../actions/modal_actions"

const modalReducer = (oldState = null, action) => {
    Object.freeze(oldState)
    debugger
    switch(action.type) {
        case OPEN_MODAL: 
        debugger
            return action.modal
        case OPEN_EDIT_MODAL: 
        debugger
        case CLOSE_MODAL: 
            return null 
        default: 
            return oldState
    }
}

export default modalReducer