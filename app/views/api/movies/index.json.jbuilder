@movies.each do |movie| 
    json.set! movie.id do 
        json.extract! movie, :title, :score, :synopsis
    end 
end 