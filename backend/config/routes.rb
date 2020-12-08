Rails.application.routes.draw do
  namespace :users do
    devise_for :users, skip: [:sessions, :new, :edit, :show], skip_helpers: true
  end
  resources :videos, only: [:index, :create, :destroy]

  post '/users/signup', to: 'users#signup';
  post '/users/login', to: 'users#login';
  patch '/users/edit', to: 'users#edit';

end
