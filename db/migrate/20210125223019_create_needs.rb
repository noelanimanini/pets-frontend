class CreateNeeds < ActiveRecord::Migration[6.1]
  def change
    create_table :needs do |t|
      t.string :medication
      t.string :exercise
      t.string :diet
      t.boolean :completed
      t.string :notes
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
