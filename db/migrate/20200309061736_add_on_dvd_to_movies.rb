class AddOnDvdToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :on_dvd, :boolean
  end
end
