import { connect } from "react-redux"
import { signout } from "../../actions/sessions_actions"
import { openModal } from "../../actions/modal_actions"
import {fetchReviews} from "../../actions/review_actions"
import Greeting from "./greeting"


const mSTP = (state) => {
    debugger
    return{
    reviews: Object.values(state.entities.reviews),
    currentUser: state.session.currentUser
}}

const mDTP = (dispatch) => ({
    signout: () => dispatch(signout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchReviews: () => dispatch(fetchReviews())
})


export default connect(mSTP, mDTP)(Greeting)