class NeedsController < ApplicationController
    def show
        need = Need.find(params[:id])
        render json: need
    end 

    def create
        
        need = Need.create(medication: exercise: diet: completed: notes: pet_id: params["need"]["pet_id"].to_i)
        render json: need
    end 

    def destroy
        need = Need.find(params[:id]).destroy
        render json: {message: 'This need has been deleted'}
    end 
end

# question: to create my create action, not all of the attributes of my needs need to be created. 
# how can I fill in my create method sufficiently.