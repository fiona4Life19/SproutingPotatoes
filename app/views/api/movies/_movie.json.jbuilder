json.extract! movie, :id, :title, :synopsis, :runtime, :genre, :release_date, :score, :rate
json.photoUrl url_for(movie.photo)


