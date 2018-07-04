# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: :create

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
