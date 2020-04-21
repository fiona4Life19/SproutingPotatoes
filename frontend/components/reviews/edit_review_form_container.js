import {connect} from "react-redux"
import {updateReview} from "../../actions/review_actions"
import EditReviewForm from "./edit_review_form"

const mSTP = (state) => {{
    debugger
}}

const mDTP = (dispatch) => ({
    updateReview: (review) => dispatch(updateReview(review))
})

export default connect(mSTP, mDTP)(EditReviewForm) 