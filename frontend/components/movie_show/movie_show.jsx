import React from "react";
import MovieDetail from "./movie_detail";
import {Link} from "react-router-dom"
import {ProtectedRoute} from "../../util/route_util"
import {ReviewLink} from "../../util/link_util"
import ReviewFormContainer from "../reviews/review_form_container"

class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
    }

    render() {
        const {movie, actors, reviews, authors, movieId} = this.props
      
        if (!movie) {
            return null
        }
        return(
        <div className="single-movie-show"> 
                <MovieDetail  movieId={movieId} movie={movie} actors={actors} reviews={reviews} authors={authors}/>
        </div>
        )
    }
}

export default MovieShow