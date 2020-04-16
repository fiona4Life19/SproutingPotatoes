import React from "react";
import MovieDetail from "./movie_detail";
import {withRouter} from "react-router-dom"


class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        if (!this.props.movie) {
            debugger
            this.props.fetchMovie(this.props.match.params.movieId)
        }
    }


    render() {
        const {movie, actors, reviews, authors, movieId, currentUserId, currentUser, deleteReview } = this.props

        if(!movie) {
            return null
        }
      

        return(
        <div className="single-movie-show"> 
                <MovieDetail   
                    movieId={movieId} 
                    movie={movie} 
                    actors={actors} 
                    reviews={reviews} 
                    authors={authors}
                    currentUserId={currentUserId}
                    currentUser={currentUser}
                    deleteReview={deleteReview}
                />
            
        </div>
        )
    }
}

export default withRouter(MovieShow)