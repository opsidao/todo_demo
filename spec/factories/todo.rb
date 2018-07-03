# frozen_string_literal: true

FactoryBot.define do
  factory :todo, class: Api::Todo do
    sequence(:creator) { |n| "user_#{n}" }
    sequence(:text) { |n| "The text of the #{n} todo" }

    trait :completed do
      completed true
    end
  end
end
