# frozen_string_literal: true

module Api
  class TodosController < ApplicationController
    include Authentication

    def index
      render json: Todo.for_username(current_username)
    end

    def create
      new_todo = Todo.create!(text: params.require(:text),
                              creator: current_username)

      render json: new_todo
    end

    def update
      todo = Todo.for_username(current_username).find(params.require(:id).to_i)

      todo.update!(
        text: params[:text],
        completed: params[:completed]
      )

      render json: todo
    end

    def destroy
      Todo.for_username(current_username).find(params.require(:id).to_i).destroy
    end
  end
end
