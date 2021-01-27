class PetsController < ApplicationController
    def index
        pets = Pet.all
        render json: pets, only: [:id, :name, :owner, :image_url, :medication, :exercise, :diet]
    end 
end
