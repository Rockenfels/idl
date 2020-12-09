Rails.application.routes.draw do

  scope module: :v1, constraints: ApiConstraints.new(version: 1, default: :true, domain: APPLICATION_DOMAIN), defaults: {format: 'json'} do
    devise_for :users, controllers: {
        registrations: 'v1/custom_devise/registrations',
        sessions: 'v1/custom_devise/sessions'
    }
  end
  resources :videos, only: [:index, :create, :destroy]

  # old_users_controller_routes
  # post '/users/signup', to: 'users#signup';
  # post '/users/login', to: 'users#login';
  # patch '/users/edit', to: 'users#edit';

end
