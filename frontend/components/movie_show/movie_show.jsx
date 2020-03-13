import React from "react";
import Greeting from "../greeting/greeting"
import Modal from "../modal/modal"
import MovieDetail from "./movie_detail";


class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
    }

    render() {
        const {movie, actors, reviews, authors} = this.props
      
        if (!movie) {
            return null
        }
        return(
            <div className="single-movie-show"> 
                <MovieDetail movie={movie} actors={actors} reviews={reviews} authors={authors}/>
            </div>
        )
    }
}

export default MovieShow