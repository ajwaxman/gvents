class EventsController < ApplicationController
  def show
    @username = params[:username]
  end
end
