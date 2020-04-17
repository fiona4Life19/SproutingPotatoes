import React from 'react'
import Greeting from '../greeting/greeting_container'
import Carousuel from "../carousuel/carousuel"
// import CardUI from "../cards/cardui"
// import MovieBrowserContainer from '../movieBrowser/movie_browser_container'
// import MovieBrowser from "../movieBrowser/movie_browser_presentation"
import MovieIndex from "../movieBrowser/movie_index"


class Home extends React.Component { 
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        const {movies, fetchMovie} = this.props

        debugger
        const sorted = movies.sort((m1, m2) => 
            m1.score < m2.score ? 1 : m1.score > m2.score ? -1 : 0
        )

        const scorecard = 
            sorted.map((movie) => <div className="movie-list"> 
                                    {movie.score} {movie.title}  
                                </div> 
            )

    
        return(
            <div>
                <div className="home">
                        <Carousuel/>
                    <label className="scorecard"> Top Movies:
                        {scorecard}
                    </label>
                </div>
            
                <div>
                    <MovieIndex
                        movies={movies}
                        fetchMovie={fetchMovie}
                    />
                </div>
            </div>
        )
    }
}

export default Home