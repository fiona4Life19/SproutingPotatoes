import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
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
        const {movies} = this.props
        return(
            <div className="home">
                <GreetingContainer/>
                <Carousuel/>
                <MovieIndex
                   movies={movies}
                />
            </div>
        )
    }
}

export default Home