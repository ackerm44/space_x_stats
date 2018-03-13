Rails.application.routes.draw do
  scope '/api' do
    get :rockets, to: 'rockets#index'
  end
end
