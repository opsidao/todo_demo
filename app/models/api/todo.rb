# frozen_string_literal: true

class Api::Todo < ApplicationRecord
  scope :for_username, ->(username) { where(creator: username) }
end
