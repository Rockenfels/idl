Rails.application.routes.draw do
  devise_for :users, skip: :sessions
  resources :videos, only: [:index, :create, :destroy]
  resources :users, except: [:new, :edit, :show]

  post '/users/signup', to: 'users#signup';
  post '/users/login', to: 'users#login';
  patch '/users/edit', to: 'users#edit';

end
