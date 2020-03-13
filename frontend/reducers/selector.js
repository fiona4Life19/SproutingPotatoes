

export const selectMovie = (state, movieId) => {
    let movie = state.entities.movies[movieId]
    return movie;
}

export const selectReviewsForMovie = (state, movieId) => {
    if (state.entities.reviews) {
        const objval = Object.values(state.entities.reviews)
        const objvalFiltered =  objval.filter( (review) => movieId == review.movie_id ) 
        return objvalFiltered
    
    }
}

export const selectActorsForMovie = (state, movieId) => {
    return Object.values(state.entities.actors).filter( (actor) => movieId == actor.movie_id )
}