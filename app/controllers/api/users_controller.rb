class Api::UsersController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def create 
        @user = User.new(user_params) 
        if @user.save  
            signin(@user)
            render "api/users/show"
        else  
            render json: ["Invalid email/ password must be at least 6 characters"], status: 418
        end  
    end  

    private 

    def user_params 
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end  


end
