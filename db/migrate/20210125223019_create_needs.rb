class CreateNeeds < ActiveRecord::Migration[6.1]
  def change
    create_table :needs do |t|
      t.string :notes
      t.boolean :medication
      t.boolean :exercise
      t.boolean :diet
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
