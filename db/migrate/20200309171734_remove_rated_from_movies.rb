class RemoveRatedFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :rated, :float
  end
end
