# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Need.delete_all
Pet.delete_all


Need.delete_all
Pet.delete_all


p1 = Pet.create(name: "Flopsie", owner: "Lindsay", image_url: "https://i.guim.co.uk/img/media/d0c0847156e2d465c40c775339aa531489391967/0_153_2369_1422/master/2369.jpg?width=700&quality=85&auto=format&fit=max&s=53f3273a4770a5ce5159aa2fc9c6d340", medication: "eye drops", exercise: "3 mile sprint", diet: "Science Hill Diet")

p2 = Pet.create(name: "Donkey", owner: "Ix", image_url: "https://www.omlet.us/images/originals/guinea_pig_breeds_crested_hand_tamed.jpg", medication: "ear drops", exercise: "tri-cycle 500 meters", diet: "Waffles")

p3 = Pet.create(name: "Kevin", owner: "Charlie", image_url: "https://www.pets4homes.co.uk/images/articles/2272/large/applehead-siamese-cats-what-are-they-5460e4201da70.jpg", medication: "skin shots 3 times a day", exercise: "rock climbing", diet: "apples")

p4 = Pet.create(name: "Naruto", owner: "Betsy", image_url: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*", medication: "paw ointment", exercise: "soccer for 15 minutes", diet: "Children")

p5 = Pet.create(name: "Zipcode", owner: "Fiona", image_url: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/12/cat-parody-instagram-removal.jpg?itok=f0n-uJsr&timestamp=1543773902", medication: "eye drops", exercise: "walk twice a day", diet: "Science Hill Diet")

p6 = Pet.create(name: "Hammy", owner: "Shrek", image_url: "https://en.meming.world/images/en/5/5f/Scared_Hamster.jpg", medication: "vitamins", exercise: "screaming", diet: "peas")

p7 = Pet.create(name: "Toto", owner: "Cindy", image_url: "https://www.petlandflorida.com/wp-content/uploads/2019/09/Petland_Florida_Cairn_Terrier.jpg", medication: "N/A", exercise: "runs twice a day", diet: "Science Hill Diet")

p8 = Pet.create(name: "Melon", owner: "Tommy", image_url: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Ways-To-Keep-Your-Parrot-Happy-And-Healthy-768x550.jpg", medication: "carrot slices", exercise: "let outside of cage and attach to treadmill", diet: "apples")

p9 = Pet.create(name: "Bulby", owner: "George", image_url: "https://previews.123rf.com/images/sytnik/sytnik1702/sytnik170200024/71561444-close-up-big-aquarium-fish-the-flower-horn.jpg", medication: "water vitamins", exercise: "rock climbing", diet: "flakes")

p10 = Pet.create(name: "Scorpio", owner: "Katie", image_url: "https://i.kym-cdn.com/photos/images/original/001/503/136/0c9.jpeg", medication: "scale oil", exercise: "soccer for 23.45 minutes", diet: "tears of a student")

# p5 = Pet.create(name: "Zipcode", owner: "Fiona", image_url: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/12/cat-parody-instagram-removal.jpg?itok=f0n-uJsr&timestamp=1543773902", medication: "eye drops", exercise: "walk twice a day", diet: "Science Hill Diet")

# p6 = Pet.create(name: "Hammy", owner: "Shrek", image_url: "https://en.meming.world/images/en/5/5f/Scared_Hamster.jpg", medication: "vitamins", exercise: "screaming", diet: "peas")

n1 = Need.create(notes: "Flopsie was very nice to the other animals", medication: true, exercise: true, diet: false, pet_id: p1.id )
n2 = Need.create(notes: "Donkey is having fun in the pool!", medication: true, exercise: true, diet: false, pet_id: p2.id)
n3 = Need.create(notes: "Kevin was awesome today!", medication: true, exercise: true, diet: false, pet_id: p3.id )
n4 = Need.create(notes: "Naruto was fun to play with today", medication: true, exercise: true, diet: false, pet_id: p4.id)
n5 = Need.create(notes: "I have no idea where zipcode was looking", medication: true, exercise: true, diet: false, pet_id: p5.id )
n6 = Need.create(notes: "Hammy seemed really scared and I did my best to work with him.", medication: true, exercise: true, diet: false, pet_id: p6.id)
n7 = Need.create(notes: "Toto ran away from me, but I found them", medication: true, exercise: true, diet: false, pet_id: p7.id )
n8 = Need.create(notes: "Melon really liked the treadmill", medication: true, exercise: true, diet: false, pet_id: p8.id)
n9 = Need.create(notes: "Bulby was adequate", medication: true, exercise: true, diet: false, pet_id: p9.id )
n10 = Need.create(notes: "typical scoprio, always tolerable", medication: true, exercise: true, diet: false, pet_id: p10.id)





puts 'done'


puts 'done'