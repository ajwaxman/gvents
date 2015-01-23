Rails.application.routes.draw do
  root 'pages#index'

  resource :event, only: :show
end
