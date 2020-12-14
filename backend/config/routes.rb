Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :videos, only: [:index, :create, :destroy]
  resources :users, only: [:index]

  post '/users/current', to: 'users#current'
end
