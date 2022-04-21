class AddCoordinatesToMuseums < ActiveRecord::Migration[6.1]
  def change
    add_column :museums, :latitude, :float
    add_column :museums, :longitude, :float
  end
end
