FinalProject::Application.routes.draw do

  resources :startup
  resources :interns
  root to: "welcome#index"


end
