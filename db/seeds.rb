# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Need.delete_all
Pet.delete_all


p1 = Pet.create(name: "Flopsie", owner: "Fiona", image_url: "https://static.wikia.nocookie.net/avatar/images/4/4c/Goat_gorilla.png/revision/latest/scale-to-width-down/333?cb=20130706150318")
p2 = Pet.create(name: "Donkey", owner: "Shrek", image_url: "https://static.wikia.nocookie.net/universalstudios/images/f/f0/Donkey_shrek.png/revision/latest?cb=20170921231940")

n1 = Need.create(medication: "eye drops", exercise: "walk twice a day", diet: "Science Hill Diet", completed: true, notes: "Flopsie was very nice to the other animals", pet_id: p1.id )
n2 = Need.create(medication: "ear drops", exercise: "pool time twice a day", diet: "Waffles", completed: true, notes: "Donkey is having fun in the pool!", pet_id: p2.id)


puts 'done'