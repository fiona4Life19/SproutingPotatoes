import { connect } from "react-redux";
import  { createReview } from "../actions/review_actions.js";
import ReviewForm from "./review/form";

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
})

export default connect(null, mDTP)(reviewForm)