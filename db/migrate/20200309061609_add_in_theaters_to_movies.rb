class AddInTheatersToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :in_theaters, :boolean
  end
end
