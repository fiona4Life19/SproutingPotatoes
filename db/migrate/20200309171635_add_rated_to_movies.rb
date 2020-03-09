class AddRatedToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :rated, :float
  end
end
