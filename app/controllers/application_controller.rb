# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # TODO No time for this now
  skip_before_action :verify_authenticity_token
end
