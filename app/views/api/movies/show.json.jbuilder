json.movie do 
    json.set! @movie.id do 
        json.partial! "api/movies/movie", movie: @movie
    end 
end 


json.reviews do  
    @movie.reviews.each do |review| 
        json.set! review.id do 
            json.partial! "api/reviews/review", review: review
        end 
    end 
end 


json.actors do  
    @movie.actors.each do |actor| 
        json.set! actor.id do 
            json.partial! "api/actors/actor", actor: actor
        end 
    end 
end 

json.users do 
    @movie.reviews.each do |review| 
        json.set! review.author_id do 
            json.partial! "api/users/user", user: review.author
        end 
    end 
end 




