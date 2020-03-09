class Casting < ApplicationRecord

    belongs_to :actor,
        foreign_key: :actor_id,
        class_name: :Actor

    belongs_to :movie, 
        foreign_key: :movie_id, 
        class_name: :Movie


end
