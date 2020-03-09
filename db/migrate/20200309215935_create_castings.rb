class CreateCastings < ActiveRecord::Migration[5.2]
  def change
    create_table :castings do |t|
      t.integer :actor_id, null: false 
      t.integer :movie_id, null: false 
      
      t.timestamps
    end
  end
end
