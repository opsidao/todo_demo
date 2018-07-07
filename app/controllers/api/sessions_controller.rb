# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    def index
      render json: { username: session[:username] }
    end

    def create
      if params[:username].present?
        session[:username] = params[:username]
      else
        head :bad_request
      end
    end

    def destroy
      session.delete(:username)
    end
  end
end
