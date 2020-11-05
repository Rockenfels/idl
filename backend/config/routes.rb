Rails.application.routes.draw do
  resources :videos, except: [:new, :edit]
  resources :users, except: [:new, :edit]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
