
// DATA -Fetch 1, shows the nav bar to go to each pet
let getPets = () => {
    fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(pets => { 
        pets.forEach(pet => renderSinglePet(pet));

        pets.forEach(pet => renderPetsNav(pet)
    )})

}
getPets();

// DOM - GET for each individual pet, not the :id
let renderPetsNav = (pet) => {
    const span = document.createElement('span')
    const navBar = document.querySelector('#nav-pets-bar')
    span.innerText = pet.name
    navBar.appendChild(span)

    span.addEventListener('click', () => clickDogs(pet))
}


// DOM card
let renderSinglePet = (pet) => {

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
    // container.innerHTML = ""


    container.append(img, name, owner, medication, exercise, diet)
    petsCard.appendChild(container)
  
}

// click on the nav bar and show each pet for each pet that is clicked
let clickDogs = (pet) => {
    const petsCard = document.querySelector('.pets-card')
    const container = document.querySelector('.container')

    const img = document.createElement('img')
    const name = document.createElement('h3')
    const owner = document.createElement('p')
    const medication = document.createElement('p')
    const exercise = document.createElement('p')
    const diet = document.createElement('p')
    const div = document.createElement('div')
    
    div.id = pet.id
    img.src = pet.image_url
    name.innerText = `Name: ${pet.name}`
    owner.innerText = `Owner: ${pet.owner}`
    medication.innerText = `Medication: ${pet.medication}`
    exercise.innerText = `Exercise: ${pet.exercise}`
    diet.innerText = `Diet: ${pet.diet}`
    container.innerHTML = ""


    container.append(img, name, owner, medication, exercise, diet)
    petsCard.appendChild(container)
    petForm(pet)
}


let petForm = (pet) => {
     // trying to make the form 
     const asideContainer = document.querySelector('.aside-form')
     const form = document.createElement('form')
     const label = document.createElement('label')
     const input = document.createElement('input')
    
     form.setAttribute('method', 'post')
     form.setAttribute('action', 'submit')
 
     input.setAttribute('type', 'checkbox')
     input.setAttribute('id', 'comments1')
 
     label.setAttribute('for', 'comments1')
     asideContainer.innerHTML = ""
     label.textContent = `Has ${pet.name} received exercise?`
    //  second checkbox
     input.setAttribute('type', 'checkbox')
     input.setAttribute('id', 'comments1')
 
     label.setAttribute('for', 'comments1')
     asideContainer.innerHTML = ""
     label.textContent = `Has ${pet.name} received exercise?`
    
     form.append(input, label)
 
     asideContainer.appendChild(form)
     // end of form 
}






