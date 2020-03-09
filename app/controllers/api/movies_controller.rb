class Api::MoviesController < ApplicationController

    def show 
        @movie = Moview.find_by(params[:id])
        render :show
    end 

end
