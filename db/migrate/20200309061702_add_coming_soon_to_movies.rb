class AddComingSoonToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :coming_soon, :boolean
  end
end
