export const fetchMovie = (id) => {
    return $.ajax ({
        url: `/api/movies/${id}`,
        method: "GET"
    })
}

export const fetchMovies = () => {
    return $.ajax({
        url: "/api/movies",
        method: "GET"
    })
}

export const createReview = (review) => {
    return $.ajax({
        url: "api/reviews",
        method: "POST",
        data: {review}
    })
}

export const fetchReviews = () => {
    return $.ajax({
        url: "api/reviews",
        method: "GET"
    })
}

