import React from "react";
import { withRouter } from "react-router_dom";

class ReviewForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            rating: 10,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    navigateToMovieShow() {
        const url = `/movies/${this.props.match.params.movieId}`
        this.props.history.push(url)
    }

    handleSumbit(e) {
        e.preventDefault() 
        const movieId = parseInt(this.props.match.params.movieId)
        const review = Object.assign({}, this.state, {movieId: movieId})
        this.props.createReview(reviews)
        this.navigateToMovieShow()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }


    render() {
        return(
            <div class="movie-review-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Rating:</label>
                    <br/>
                    <input type="number" value={this.state.rating}
                    onChange={this.update('rating')}
                    />
                <br/>

                <label>Review</label>
                <br/>

                <textarea               
                    cols="30"
                    rows="10"
                    value={this.state.body}
                    onChange={this.update('body')}
                />

                <button onClick={this.navigateToMovieShow}></button>
                </form>
            </div>

        )
    }
}

export default withRouter(ReviewForm)