import React from "react"
import {connect} from "react-redux"
import {signup, signin} from "../../actions/sessions_actions"
import Signup from "./signup"
import { openModal, closeModal } from "../../actions/modal_actions"




const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = (dispatch) => ({ 
    signup: (user) => dispatch(signup(user)),
    signin: (user) => dispatch(signin(user)),
    signinButton: (
        <button className="modal-footer-button" onClick={ () =>{ 
            dispatch(openModal('signin'))}
            dispatch()
         }>Sign In Here</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Signup)