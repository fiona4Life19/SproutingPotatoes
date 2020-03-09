class Review < ApplicationRecord
    validates :body, presence: true

    belongs_to :movie,
        foreign_key: :movie_id, 
        class_name: :Movie

    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User

end
