class HomeController < ApplicationController
  def index
    @user = User.second
  end
end
