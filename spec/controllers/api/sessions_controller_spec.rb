# frozen_string_literal: true

require 'rails_helper'

describe Api::SessionsController do
  let(:parsed_body) { JSON.parse(response.body) }

  describe '#index' do
    let(:response_username) { parsed_body['username'] }

    context 'when the user is logged in' do
      let(:username) { 'iAmTheUser' }

      before do
        session[:username] = username
      end

      it 'returns her username' do
        get :index

        expect(response_username).to eq(username)
      end
    end

    context 'when the user is not logged in' do
      it 'returns a null username' do
        get :index

        expect(response_username).to be_nil
      end
    end
  end

  describe '#create' do
    subject(:make_request) { post :create, params: { username: username } }

    context 'when no username is provided' do
      let(:username) { '' }

      it 'generates an error' do
        make_request

        expect(response).to have_http_status(:bad_request)
      end
    end

    context 'when a username is provided' do
      let(:username) { 'amITheUser' }

      it 'sets the user in the session' do
        expect(session[:username]).to be_nil

        make_request

        expect(session[:username]).to eq(username)
      end
    end
  end

  describe '#destroy' do
    before do
      session[:username] = 'theAmUserI'
    end

    it 'removes the username from the session' do
      delete :destroy

      expect(session[:username]).to be_nil
    end
  end
end
