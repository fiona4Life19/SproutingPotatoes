class Actor < ApplicationRecord

    has_many :castings, 
        foreign_key: :actor,
        class_name: :Casting

    has_many :movies, 
        through: :castings,
        source: :movie

end
