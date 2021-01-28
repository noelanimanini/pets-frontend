class NeedsController < ApplicationController
    def index
        needs = Need.all
        render json: needs
    end 

    def show
        need = Need.find(params[:id])
        render json: need
    end 

    def create
        need = Need.create(notes: params[:notes], medication: params[:medication], exercise: params[:exercise], diet: params[:diet], pet_id: params[:pet_id])
        render json: need
    end 

    def destroy
        need = Need.find(params[:id]).destroy
        render json: {message: 'This need has been deleted'}
    
    end 

end

# question: to create my create action, not all of the attributes of my needs need to be created. 
# how can I fill in my create method sufficiently.