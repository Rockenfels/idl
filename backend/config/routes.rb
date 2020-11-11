Rails.application.routes.draw do
  resources :videos, only: [:index, :create, :destroy]
  resources :users, except: [:new, :edit, :show]

  post '/users/signup', to: 'users#signup';
  post '/users/login', to: 'users#login';
  patch '/users/edit', to: 'users#edit';
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
