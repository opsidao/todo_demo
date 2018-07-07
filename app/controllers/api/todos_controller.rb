# frozen_string_literal: true

module Api
  class TodosController < ApplicationController
    include Authentication

    def index
      respond_to do |format|
        format.any do
          render :index,
                 formats: [:json],
                 locals: { todos: Todo.for_username(current_username) }
        end
      end
    end

    def create
      new_todo = Todo.create!(text: params.require(:text),
                              creator: current_username)

      render json: new_todo
    end

    def update
      todo.update!(text: params[:text]) if params[:text]
      todo.update!(completed: params[:completed])

      render json: todo
    end

    def destroy
      todo.destroy
    end

    unless Rails.env.production?
      def destroy_all
        Todo.destroy_all
      end
    end

    private

    def todo
      @todo ||= Todo.for_username(current_username).find(todo_id)
    end

    def todo_id
      params.require(:id).to_i
    end
  end
end
