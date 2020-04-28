import React from "react"


class Carousel2 extends React.Component{
    constructor(props) {
        super(props) 
    }

    render(){
        const {movies} = this.props
        debugger
        const movie_card = movies.map((movie) => (
          <div className="cards">
            <div className="">
              <img className="card-img" src={movie.photoUrl} alt="" />
            </div>

            <div className="">
              <h4 className="card-title">{movie.title}</h4>
              <p> 🥔{movie.score} </p>
              <a href="#" className="btn btn-outline-sucess"></a>
            </div>
          </div>
        ));


        return(
            <div className="wrapper">
                <section id="section1">
                    <a href="#section3">←</a>
                        <div class="item">
                            {/* {movie_card} */}
                        </div>

                    <a href="#section2">➤</a>
                </section>

                <section id="section2">
                    <a href="#section1">←</a>

                    <a href="#section3">→</a>
                </section>

                <section id="section3">
                    <a href="#section2">←</a>

                    <a href="#section1">→</a>
                </section>
            </div>
        )
    }
}

export default Carousel2




