# frozen_string_literal: true

class CreateApiTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :api_todos do |t|
      t.string :creator, null: false
      t.boolean :completed, default: false, null: false
      t.text :text, null: false

      t.timestamps
    end
  end
end
