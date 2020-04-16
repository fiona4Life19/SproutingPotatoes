class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception

    helper_method :current_user, :signed_in? 

    private 

    def current_user   
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in? 
        !!current_user   
    end  

    def signin(user) 
        session[:session_token] = user.reset_session_token!
    end 

    def signout
        current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil
    end  

    def require_signed_in 
        redirect_to api_session_url unless signed_in?
    end 

end
