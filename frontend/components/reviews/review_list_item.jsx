import React from "react"
import {connect} from "react-redux"

const Review = ({review, author}) => {
    const {score, body} = review

    return(
        <div>
            <ul>
                <li>Score: {score} </li>
                <li>{body} -by {author.first_name} {author.last_name} </li>
            </ul>
        </div>
    )
}


const mSTP = ({entities: {users} }, {review}) => {
    return {
        author: users[review.author_id]
    }
}

export default connect(mSTP)(Review)