class UsersController < ApplicationController
    def index
        users = User.all()
        render json: users, except: [:email, :password_digest, :updated_at, :created_at]
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user, only: [:username, :email]
        else
            render json: {status: "error", errors: [user.errors.full_messages]}
        end
    end

    def update
        user = User.find_by(username: params[:user][:username])
        user.email = params[:user][:email]

        if params[:user][:password] != ""
            user.password = params[:user][:password]
        end
        if user != nil && user.save
            render json: {message: 'User Updated', user: user}
        end
    end

    def destroy
        user = User.find_by(id: params[:id])
        if !user.nil?
            user.destroy
            render json: {message: 'user successfully deleted'}
        else
            render json: {message: 'couldn\'t find user'}
        end
    end

    def signup
        user = User.new(user_params);
        if user.save
            render json: {message: 'User Created', user: user}
        end
    end

    def login
        user = User.find_by(username: params[:user][:username])
        if !user.nil? && user.authenticate(params[:user][:password])
            render json: {message: 'User Found', user: user}
        elsif !user.nil? && user.password_digest === params[:user][:password_digest]
            render json: {message: 'User Found', user: user}
        else
            render json: {message: 'User Not Found'}
        end

    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
