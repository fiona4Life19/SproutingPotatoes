class Api::ReviewsController < ApplicationController
       
    before_action :require_signed_in 

    def show  
        @review = Review.find(params[:id])
        render :show 
    end 

    def index 
        @reviews = Review.all 
        render :index
    end 

    def create 
        @review = current_user.reviews.new(review_params)

        if @review.save 
            render :show 
        else   
            render json: @review, status: :unprocessable_entity
        end  
    end  

    def edit  
        @review = review.find(params[:id])
        render :edit 
    end 


    def update
        @review = current_user.reviews.find(params[:id])

        if @review.update(review_params)
            redirect_to movie_url(@review.movie_id)
        else  
            render json: @review, status: :unprocessable_entity
        end 
    end 
            

    def destroy 
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render :show
    end 


    private 

    def review_params
        params.require(:review).permit(:body, :movie_id, :score)
    end  

end

