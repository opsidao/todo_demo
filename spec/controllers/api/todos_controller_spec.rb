# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::TodosController, type: :controller do
  let(:username) { 'heIsTheUser' }

  describe '#index' do
    context 'when the user is not authenticated' do
      before { get :index, format: :json }

      it 'returns a 403' do
        expect(response).to have_http_status(:forbidden)
      end
    end

    context 'when the user is authenticated' do
      render_views

      let(:expected_response) do
        {
          todos: todos.map do |todo|
            {
              id: todo.id,
              text: todo.text,
              completed: todo.completed,
            }
          end
        }
      end

      let!(:todos) { create_list(:todo, 2, creator: username) }

      before do
        session[:username] = username

        create_list(:todo, 2)

        get :index, format: :json
      end

      it 'returns the todos in a json' do
        expect(response).to have_http_status(:ok)
        expect(response.body).to eq(expected_response.to_json)
      end
    end
  end

  describe '#create' do
    subject(:create_todo) { post :create, params: params }

    context 'when the user is not authenticated' do
      let(:params) { {} }

      it 'returns a 403' do
        create_todo

        expect(response).to have_http_status(:forbidden)
      end
    end

    context 'when the user is authenticated' do
      let(:created_todo) { Api::Todo.last }

      let(:params) do
        {
          text: 'theText'
        }
      end

      before do
        session[:username] = username

        create_todo
      end

      it 'creates the todo' do
        expect(response).to have_http_status(:ok)

        expect(created_todo.creator).to eq(username)
        expect(created_todo.text).to eq(params[:text])
      end
    end
  end

  describe '#update' do
    subject(:update_todo) { put :update, params: params }

    context 'when the user is not authenticated' do
      let(:params) { { id: 1 } }

      it 'returns a 403' do
        update_todo

        expect(response).to have_http_status(:forbidden)
      end
    end

    context 'when the user is authenticated' do
      let(:todo) { create(:todo, creator: username) }

      let(:params) do
        {
          id: todo.id,
          text: 'theText',
          completed: true
        }
      end

      before do
        session[:username] = username

        update_todo
      end

      it 'updates the todo' do
        expect(response).to have_http_status(:ok)

        todo.reload

        expect(todo.creator).to eq(username)
        expect(todo.text).to eq(params[:text])
        expect(todo).to be_completed
      end
    end
  end

  describe '#destroy' do
    subject(:destroy_todo) { delete :destroy, params: params }

    context 'when the user is not authenticated' do
      let(:params) { { id: 1 } }

      it 'returns a 403' do
        destroy_todo

        expect(response).to have_http_status(:forbidden)
      end
    end

    context 'when the user is authenticated' do
      let(:todo) { create(:todo, creator: username) }

      let(:params) do
        {
          id: todo.id
        }
      end

      before do
        session[:username] = username

        destroy_todo
      end

      it 'destroyes the todo' do
        expect(response).to have_http_status(:no_content)

        expect(Api::Todo.exists?(todo.id)).to eq(false)
      end
    end
  end
end
