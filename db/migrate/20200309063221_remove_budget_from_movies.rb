class RemoveBudgetFromMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :budget, :float
  end
end
