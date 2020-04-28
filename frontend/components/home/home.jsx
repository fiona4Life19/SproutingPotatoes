import React from 'react'
import Greeting from '../greeting/greeting_container'
import Carousuel from "../carousuel/carousuel"
// import CardUI from "../cards/cardui"
// import MovieBrowserContainer from '../movieBrowser/movie_browser_container'
// import MovieBrowser from "../movieBrowser/movie_browser_presentation"
import MovieIndex from "../movieBrowser/movie_index"
import Carousel2 from "../carousuel/carousel_2"


class Home extends React.Component { 
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const {movies, fetchMovie} = this.props

        // debugger
        // const sorted = movies.sort((m1, m2) => 
        //     m1.score < m2.score ? 1 : m1.score > m2.score ? -1 : 0
        // )

        

        // const scorecard = 
        //     sorted.map((movie) => <div className="movie-list"> key=
        //                             🥔 {movie.score} &nbsp; {movie.title}  
        //                         </div> 
        //     )

    
        return (
          <div>
            <div className="home">
              <Carousuel />
              {/* <label className="scorecard">
                {" "}
                Top Movies:
                {scorecard}
              </label> */}
            </div>

            <div className="movie-index">
              {movies.map((movie) => (
                <MovieIndex
                  key={movie.id}
                  movie={movie}
                  fetchMovie={fetchMovie}
                />
              ))}
            </div>

            <Carousel2 movies={movies} fetchMovie={fetchMovie} />

            {/* <div className="wrapper">
              <section id="section1">
                <a href="#section3">←</a>
                <div class="item">
                  <img
                    src="https://www.dramamilk.com/wp-content/uploads/2019/10/Joker-movie-dominates-Korean-box-office-thumbnail.jpg-copy.jpg"
                    alt=""
                  />
                </div>

                <a href="#section2">→</a>
              </section>

              <section id="section2">
                <a href="#section1">←</a>

                <a href="#section3">→</a>
              </section>

              <section id="section3">
                <a href="#section2">←</a>

                <a href="#section1">→</a>
              </section>
            </div> */}
          </div>
        );
    }
}

export default Home