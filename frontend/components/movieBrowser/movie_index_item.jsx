import React from "react"
import {withRouter} from "react-router-dom"

class MovieIndexItem extends React.Component { 
    constructor(props) {
      super(props)

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const movieId = this.props.movie.id;
      this.props.history.push(`/movies/${movieId}`)
    }

    render() {
      debugger
      const {movie} = this.props
      return(
        <div className="cards" onClick={this.handleClick}>
          <div className="">
            <img className="card-img" src={movie.photoUrl} alt="" />
          </div>

          <div className="">
            <h4 className="card-title">{movie.title}</h4> 
            <p> 🥔{movie.score} </p>
            <a href="#" className="btn btn-outline-sucess"></a>
          </div>
        </div>
      ) 
    }
}

export default withRouter(MovieIndexItem)