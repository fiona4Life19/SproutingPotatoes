class Api::ReviewsController < ApplicationController
       
    before_action :require_signed_in 

    def show  
        @review = Review.find(params[:id])
        render :show 
    end 

    def create 
        @review = current_user.reviews.new(review_params)

        if @review.save 
            render :show 
        else   
            render json: @review, status: 402
        end  
    end  

    private 

    def review_params
        params.require(:review).permit(:rating, :body, :movie_id, :author_id)
    end  

end

