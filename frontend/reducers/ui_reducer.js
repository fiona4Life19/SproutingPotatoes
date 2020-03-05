import modalReducer from "../reducers/modal_reducer"
import { combineReducers } from "redux";

const uiReducer = combineReducers({
    modal: modalReducer
})

export default uiReducer