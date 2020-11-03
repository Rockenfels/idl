class UsersController < ApplicationController
    def index
        users = User.all()
        render json: users, include: [:username]
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: user, include: [:username]
        else
            render json: {status: "error", errors: [user.errors.full_messages]}
        end
    end

    def show
        user = User.find_by('id': [:params][:id])
        if !user.nil? 
            render json: user include: [:username]
        else
            render json: {message: 'user not found'}
        end
    end

    def update
        user = User.find_by('id': [:params][:user][:id])
        if !user.empty?
            user.update(user_params)
            render json: user
        else
            render json: {message: "error - invalid user data"}
        end
    end

    def delete
        user = User.find_by('id': [:params][:user][:id])
        if !user.nil?
            user.destroy
            render json: {message: 'user successfully deleted'}
        else
            render json: {message: 'couldn\'t find user'}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end