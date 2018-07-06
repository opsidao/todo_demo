# frozen_string_literal: true

json.todos(todos) do |todo|
  json.call todo, :id, :text, :completed
end
