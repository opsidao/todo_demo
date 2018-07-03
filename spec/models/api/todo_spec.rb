# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::Todo, type: :model do
  describe '.for_username' do
    subject { described_class.for_username(username) }

    let(:username) { 'yeahTheUserName' }

    let!(:username_todo) { create(:todo, creator: username) }

    before do
      create(:todo)
    end

    it 'only returns todos for the given username' do
      expect(subject).to match_array([username_todo])
    end
  end
end
