json.set! @movie.id do 
    json.extract @movie, title, :synopsis, :runtime, "genre", "releast_date", "score", "rate"
end