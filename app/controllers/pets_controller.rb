class PetsController < ApplicationController
    def index
        pets = Pet.all
        render json: pets, only: [:name, :owner, :image_url]
    end 
end
