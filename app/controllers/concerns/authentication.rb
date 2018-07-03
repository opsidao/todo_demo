# frozen_string_literal: true

module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :authenticate
  end

  def authenticate
    return if current_username.present?

    head :forbidden
  end

  def current_username
    session[:username]
  end
end
