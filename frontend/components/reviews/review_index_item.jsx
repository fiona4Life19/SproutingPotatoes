// import React from "react"

// class ReviewIndexItem extends React.Component{
//     constructor(props) {
//         super(props)
//     }

// render() {
//     const {reviews} = this.props

//     const reviewinfo = reviews.map(review => {
//         const author_id = review.author_id
//         const author = authors[author_id]
//         const first = author.first_name
//         const last = author.last_name

//     return (
//     <div>
//             <div className="speech-bubble">
//                 {this.state.open ?
//                     <div>
//                         <div>

//                             <i className="stars" class="fas fa-star "> </i>
//                             <i className="stars" class="fas fa-star "> </i>
//                             <i className="stars" class="fas fa-star "> </i>
//                             <i className="stars" class="fas fa-star "> </i>
//                             <i className="stars" class="fas fa-star "> </i>

//                         </div>

//                         <textarea
//                             cols="100"
//                             rows="15"
//                             value="What did you think of the movie?"
//                         />
//                     </div> : null}

//         <p>{review.body} </p>
//         <p className="review-score"> 🥔{review.score} {first} {last} </p>

//         { currentUserId === author_id ? (
//             <button onClick={() => deleteReview(review.id)}>Delete</button>
//         ) : (
//             null
//         )}

//         {currentUserId === author_id ? (
//             <button onClick={this.openReviewModal(review)
//             }>Update</button>
//         ) : (
//             null
//         )}

//     </div > 
//     )
//     }

// }



export default ReviewIndexItem