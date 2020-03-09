class Actor < ApplicationRecord

    has_many :castings, 
        foreign_key: :actor,
        class_name: :Casting

end
