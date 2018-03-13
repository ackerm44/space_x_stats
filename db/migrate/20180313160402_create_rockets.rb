class CreateRockets < ActiveRecord::Migration[5.1]
  def change
    create_table :rockets do |t|
      t.string :name
      t.float :cost_per_launch
      t.float :height
      t.float :diameter
      t.float :mass
      t.float :number_of_engines
      t.string :engine_type
      t.text :description
    end
  end
end
