class AddScoreToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :score, :float
  end
end
