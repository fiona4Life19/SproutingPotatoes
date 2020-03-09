class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :synopsis, null: false
      t.string :runtime, null: false 
      t.string :genre, null: false 
      t.date :release_date, null: false 
      t.float :budget, null: false 
      t.float :budget, null: false 
      
      t.timestamps
    end
  end
end
