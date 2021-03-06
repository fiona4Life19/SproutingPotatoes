import React from "react"; 
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SigninFormContainer from "../session/signin_form_container"; 
import SignupFormContainer from "../session/signup_form_container";
import ReviewFormContainer from "../reviews/review_form_container";

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component = undefined;
    switch (modal) {
        case 'signin': 
            component = <SigninFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'review':
            debugger
            component = <ReviewFormContainer />
            break
        default: 
            return null 
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}


const mSTP = (state) => {
    return {
    modal: state.ui.modal
    }
}

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)