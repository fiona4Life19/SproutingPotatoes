import { connect } from "react-redux";
import  { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { closeModal } from "../../actions/modal_actions"
import {withRouter} from "react-router-dom"


const mSTP = (state, ownProps) => {
debugger    
return{
}
}

const mDTP = dispatch => {
    debugger
    return{
    createReview: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())

}}

export default withRouter(connect(mSTP, mDTP)(ReviewForm))