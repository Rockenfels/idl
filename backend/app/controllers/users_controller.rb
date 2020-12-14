require 'pry'
class UsersController < ApplicationController
    def index
        users = User.all()
        render json: users, except: [:email, :password_digest, :updated_at, :created_at]
    end

    def current
        user = User.find_by('uid': params[:uid])
        render json: {user: user}
    end
    
    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation, :uid)
    end
end
