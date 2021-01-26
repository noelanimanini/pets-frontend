
// DATA 
let getPets = () => {
    fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(pets => { pets.forEach(
        pet => renderPets(pet)
    )})

}
getPets();

// DOM - GET
let renderPets = (pet) => {
    const span = document.createElement('span')
    const navBar = document.querySelector('#nav-pets-bar')
    span.innerText = pet.name
    navBar.appendChild(span)

    span.addEventListener('click', () => clickDogs(pet))
}

let clickDogs = (pet) => {
    const petsCard = document.querySelector('.pets-card')
    const container = document.querySelector('.container')

    const img = document.createElement('img')
    const name = document.createElement('h3')
    const owner = document.createElement('p')
    const medication = document.createElement('p')
    const exercise = document.createElement('p')
    const diet = document.createElement('p')

    

    img.src = pet.image_url
    name.innerText = `Name: ${pet.name}`
    owner.innerText = `Owner: ${pet.owner}`
    medication.innerText = `Medication: ${pet.medication}`
    exercise.innerText = `Exercise: ${pet.exercise}`
    diet.innerText = `Diet: ${pet.diet}`
    container.innerHTML = ""


    container.append(img, name, owner, medication, exercise, diet)
    petsCard.appendChild(container)

}

let petForm = () => {
    
}






