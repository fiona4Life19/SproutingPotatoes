class AddCastOrdToCastings < ActiveRecord::Migration[5.2]
  def change
    add_column :castings, :cast_ord, :integer
  end
end
