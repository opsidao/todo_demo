# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :sessions, only: %i[index create] do
      collection { delete :destroy }
    end
  end
end
