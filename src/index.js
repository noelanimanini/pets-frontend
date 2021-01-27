
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
// let showAllPets = (pets) => {

// }


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
    // const imageContainer = document.createElement('img')

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
     const div = document.createElement('div')
     
     const asideContainer = document.querySelector('.aside-form')
     const form = document.createElement('form')
     const label = document.createElement('label')
     const label2 = document.createElement('label')
     const label3 = document.createElement('label')
     const input = document.createElement('input')
     const input2 = document.createElement('input')
     const input3 = document.createElement('input')
     const input4 = document.createElement('input')
     const input5 = document.createElement('input')
     const br = document.createElement('br')
     const br2 = document.createElement('br')
     const br3 = document.createElement('br')
    //  form.id = pet.id
    //  const button = document.createElement('button')

    //  button.setAttribute('type', 'submit')
    //  button.innerText = 'Update'
    input5.setAttribute('type', 'submit') 
    input5.setAttribute('value', 'submit') 
    
     form.setAttribute('method', 'post')
     form.setAttribute('action', 'submit')
     form.setAttribute('name', 'petform')
     
    //  notes 
     input4.setAttribute('type', 'text')
     input4.setAttribute('id', 'notes')
     input4.setAttribute('name', 'notes')
     input4.setAttribute('value', 'What do you want to write down today?')

     
     input.setAttribute('type', 'checkbox')
     input.setAttribute('id', 'exercise')
     input.setAttribute('value', 'exercise')
 
     label.setAttribute('for', 'comments1')
     asideContainer.innerHTML = ""
     label.textContent = `Has ${pet.name} received exercise ${pet.exercise}?`
    //  second checkbox
     input2.setAttribute('type', 'checkbox')
     input2.setAttribute('id', 'medication')
 
     label2.setAttribute('for', 'comments2')
     
     label2.textContent =  `Has ${pet.name} received ${pet.medication}?`
    // end of second checkbox
    // third checkbox
     input3.setAttribute('type', 'checkbox')
     input3.setAttribute('id', 'diet')
 
     label3.setAttribute('for', 'comments3')
    
     label3.textContent = `Has ${pet.name} been fed ${pet.diet}?`
    //  end of third checkbox

    // conditional to make a string true
     
     form.append(input, label, br, input2, label2, br2, input3, label3, br3, input4, input5)
 
     asideContainer.appendChild(form)
     form.addEventListener('submit', (e) => newFunction(e, pet))
     // end of form 
}

const newFunction = (e, pet) => {
    e.preventDefault()
    
    fetch(`http://localhost:3000/needs`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              notes: e.target.notes.value,
              medication: e.target.medication.checked,
              exercise: e.target.exercise.checked,
              diet: e.target.diet.checked,
              pet_id: pet.id
          })
      })
      .then(res => res.json())
      .then(object => console.log(object))
      .catch(error => console.log(error.message))

}
    
 






