class Movie < ApplicationRecord

    has_many :movie_reviews, 
        foreign_key: :movie_id,
        class_name: :Review

    has_many :castings, 
        foreign_key: :movie_id, 
        class_name: :Casting
end
