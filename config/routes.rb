# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'root#index'

  namespace :api do
    resources :todos, only: %i[index create update destroy]
  end

  namespace :api do
    resources :sessions, only: %i[index create] do
      collection { delete :destroy }
    end
  end
end
