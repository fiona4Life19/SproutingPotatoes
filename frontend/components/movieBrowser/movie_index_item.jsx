import React from "react"

const MovieIndexItem = ({movie}) => {

    return(
      <div className="cards">
        <div className="">
          <img className="card-img" src="https://cdn10.bigcommerce.com/s-vzuks4/products/2674/images/3491/Baby_Driver__89942.1505228769.1280.1280.jpg?c=2" alt="" />
        </div>

        <div className="">
          <h4 className="card-title">{movie.title}</h4> 
          <p> 🥔{movie.score} </p>
          <a href="#" className="btn btn-outline-sucess"></a>
        </div>
      </div>
    )
}

export default MovieIndexItem