import React from "react";
import MovieDetail from "./movie_detail";
import { withRouter } from "react-router-dom"


class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.movie) {
            this.props.fetchMovie(this.props.match.params.movieId)
        }
    }


    render() {

        const { movie, 
                actors, 
                movieReviews, 
                authors, 
                currentUserId, 
                deleteReview, 
                openModal, 
                openEditModal,
                currentUser, 
                closeModal,
                updateReview
        } 
        = this.props

        if(!movie) {
            return null
        }
      
        return (
            <div className="single-movie-show"> 
                    <MovieDetail   
                        movie={movie} 
                        actors={actors} 
                        movieReviews={movieReviews} 
                        authors={authors}
                        currentUserId={currentUserId}
                        deleteReview={deleteReview}
                        openModal={openModal}
                        openEditModal={openEditModal}
                        currentUser={currentUser}
                        closeModal={closeModal}
                        updateReview={updateReview}
                    />    
            </div>
        )
    }
}

export default withRouter(MovieShow)