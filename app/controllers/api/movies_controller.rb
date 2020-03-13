class Api::MoviesController < ApplicationController

    def show 
        Movie.includes(reviews: [:author])
        @movie = Movie.find_by(id: params[:id])
        render :show
    end 

    def index 
        @movies = Movie.all 
        render :index
    end 


end
