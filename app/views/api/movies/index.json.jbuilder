@movies.each do |movie| 
debugger
    json.set! movie.id do 
        json.extract! movie, :id, :title, :synopsis, :runtime, :genre, :release_date, :score, :rate 
        
    end 
end 