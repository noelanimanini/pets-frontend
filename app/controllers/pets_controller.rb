class PetsController < ApplicationController
    def index
        pets = Pet.all
        render json: pets, only: [:id, :name, :owner, :image_url, :medication, :exercise, :diet]
    end 

    def update
        pet = Pet.find(params[:id])
        pet.update(pet_params)
        render json: pet
    end 

    def destroy
        pet = Pet.find(params[:id]).destroy
        render json: {message: 'This need has been deleted'}
    end 

    private

    def pet_params
        params.require(:pet).permit(:medication, :exercise, :diet)
    end 
end
