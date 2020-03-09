class AddordToCastings < ActiveRecord::Migration[5.2]
  def change
      add_column :castings, :ord, :integer
  end
end
