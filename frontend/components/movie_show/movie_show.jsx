import React from "react";
import MovieDetail from "./movie_detail";
import {withRouter} from "react-router-dom"
import { updateReview } from "../../util/review_api_util";


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
                reviews, 
                authors, 
                currentUserId, 
                deleteReview, 
                openModal, 
                openEditModal,
                currentUser, 
                updateReview,
                closeModal
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
                        reviews={reviews} 
                        authors={authors}
                        currentUserId={currentUserId}
                        deleteReview={deleteReview}
                        openModal={openModal}
                        openEditModal={openEditModal}
                        currentUser={currentUser}
                        updateReview={updateReview}
                        closeModal={closeModal}
                    />    
            </div>
        )
    }
}

export default withRouter(MovieShow)