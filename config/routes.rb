Rails.application.routes.draw do
  root 'pages#index'
  get  '/:id', to: 'pages#show'
end
