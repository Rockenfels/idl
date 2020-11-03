class UsersController < ApplicationController
    def index
        users = User.all()
        return json: users
    end

    def create
        user = User.new(user_params)

        if user.save
            return json: user
        else
            return json: {status: "error", errors: [user.errors.full_messages]}
        end
    end

    def show
        user = User.find_by('id': [:params][:id])
        if !user.nil? 
            return json: user
        else
            return json: {message: 'user not found'}
        end
    end

    def update
        user = User.find_by('id': [:params][:user][:id])
        if !user.empty?
            user.update(user_params)
            return json: user
        else
            return json: {message: "error - invalid user data"}
        end
    end

    def delete
        user = User.find_by('id': [:params][:user][:id])
        if !user.nil?
            user.destroy
            return json: {message: 'user successfully deleted'}
        else
            return json: {message: 'couldn\'t find user'}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
