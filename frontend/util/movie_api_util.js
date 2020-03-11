export const fetchmovie = (id) => {
    return $.ajax ({
        url: "/api/movies/:id",
        method: "GET"
    })
}

export const fetchMovies = () => {
    return $.ajax({
        url: "/api/movies",
        method: "GET"
    })
}