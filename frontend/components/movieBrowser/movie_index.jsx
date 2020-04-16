import React from 'react'
import MovieIndexItem from "./movie_index_item"

class MovieIndex extends React.Component{
        constructor(props) {
            super(props)
        }
        
        render() {
            const movies = this.props.movies
            const movies1 = movies.map( (movie) => 
                <li className="card"> <MovieIndexItem movie={movie} fetchMovie={this.props.fetchMovie} key={movie.id}/> </li>)
            return(
                <div className="movie-index">
                    {movies1}
                </div>
            )
        }
}


export default MovieIndex