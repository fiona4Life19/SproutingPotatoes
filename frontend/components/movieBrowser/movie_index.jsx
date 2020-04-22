import React from 'react'
import MovieIndexItem from "./movie_index_item"

class MovieIndex extends React.Component{
        constructor(props) {
            super(props)
        }
        
        render() {                  
            return (
              <div>
                <li className="card">
                  <MovieIndexItem
                    movie={this.props.movie}
                    fetchMovie={this.props.fetchMovie}
                    key={this.props.movie.id}
                  />
                </li>
              </div>
            );
        }
}


export default MovieIndex