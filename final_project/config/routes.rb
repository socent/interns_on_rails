FinalProject::Application.routes.draw do
  get "interns/show"

  resources :startups
  resources :interns
  root :to => "welcome#index"


end
