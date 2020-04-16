import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            score: 5,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToMovieShow = this.navigateToMovieShow.bind(this);
    }

    navigateToMovieShow() {
        const url = `/movies/${this.props.match.params.movieId}`
        this.props.history.push(url)
    }

    handleSubmit(e) {
        e.preventDefault() 
        const movieId = parseInt(this.props.match.params.movieId)
        const review = Object.assign({}, this.state, {movie_id: movieId })
        this.props.createReview(review)
        this.navigateToMovieShow()
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }


    render() {
        return(
            <div class="movie-review-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Score:</label>
                    <br/>
                    <input type="number" value={this.state.score}
                    onChange={this.update('score')}
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
                <input type="submit" />
                </form>
                <button onClick={this.navigateToMovieShow}>Cancel</button>
            </div>

        )
    }
}

export default withRouter(ReviewForm)