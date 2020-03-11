import React from "react";
import {connect} from "react-redux";
import {signin, clearErrors} from "../../actions/sessions_actions";
import Signin from "./signin";
import {openModal, closeModal} from "../../actions/modal_actions";


const mSTP = ({errors}) => ({
    errors: errors.session
})

const mDTP = dispatch => ({
    signin: (user) => dispatch(signin(user)),
    demoUser: () => dispatch(signin({ email: "ASEbuzz@aol.com", password: "password"})),
    signup: () => dispatch(openModal("signup")),  
    clearErrors: () => dispatch(clearErrors()),      
    signUpButton: (
        <button
            className="modal-footer-button"
            onClick={() =>
                dispatch(openModal('signup'))
            }
        >Sign In Here</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Signin)