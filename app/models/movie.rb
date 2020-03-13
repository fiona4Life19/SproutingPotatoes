class Movie < ApplicationRecord

    has_many :reviews, 
        foreign_key: :movie_id,
        class_name: :Review

    has_many :castings, 
        foreign_key: :movie_id, 
        class_name: :Casting

    has_many :actors, 
        through: :castings,
        source: :actor
end
