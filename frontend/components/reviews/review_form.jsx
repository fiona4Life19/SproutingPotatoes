import React from "react";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";

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
        debugger

        // const review = parseInt(this.props.match.params.movieId)
        // const movieId = this.props.movieId
        const movieId = this.props.location.pathname.replace(/[^0-9]/g, "")
        const review = Object.assign({}, this.state, {movie_id: movieId })
        debugger
        this.props.createReview(review)
        .then(this.props.closeModal())
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }


    render() {

        let starContainer = []
        for (let index = 0; index < 5; index++) {
            starContainer.push(
                 <i className="stars" class="fas fa-star fa-3x" value={this.state.score} onClick={() => this.setState({ score: 3 })}   ></i> )
        }


        return(
            <div class="movie-review-form">
                <form onSubmit={this.handleSubmit}>
                {starContainer}

                <textarea               
                    cols="100"
                    rows="30"
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