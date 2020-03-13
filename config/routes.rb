Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy] 
    resources :reviews, only: [:index, :show, :create]
    resources :movies, only: [:show, :index]
    resources :actors, only: [:index]
  end 

   root to: "static_pages#root"

end
