import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIEW"

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews

})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const fetchReviews = () => dispatch => {
    return APIUtil.fetchReviews() 
    .then((reviews) => dispatch(receiveReviews(reviews)))
}

export const fetchReview = (reviewId) => dispatch => {
    return APIUtil.fetchReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
}

export const createReview = (review) => dispatch => {
    return APIUtil.createReview(review)
        .then((createdReview) => dispatch(receiveReview(createdReview)))
}

export const updateReview = (review) => dispatch => {
    debugger
    return APIUtil.updateReview(review)
    .then((updatedReview) => dispatch(receiveReview(updatedReview)))
}

export const deleteReview = (reviewId) => dispatch => {
    return APIUtil.deleteReview(reviewId) 
    .then(() => dispatch(removeReview(reviewId)))
}