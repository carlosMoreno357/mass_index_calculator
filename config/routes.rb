Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html	
  resources :users, only: [:new, :create]
  get 'login', to: 'sessions#new'
  get 'logout', to: 'sessions#logout'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#calculator'
end
