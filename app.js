const featuredAnimalContainer = document.querySelector(".featured-animal-container")
const featuredAnimal = document.querySelector("#featured-animal")
const featuredAnimalInfo = document.querySelector("#featured-animal-info")
const featuredAnimalH2 = document.querySelector("#featured-animal-h2")
const createUser = document.querySelector("#create-user")
const signUpButton = document.querySelector("#sign-up-button")
const userDropDown = document.querySelector('#user-dropdown')
const newUserForm = document.querySelector("#new-user-form")
const newUserNav = document.querySelector("#new-user-nav")
const newUserText = document.querySelector("#new-user-text")
const userPageButton = document.querySelector("#go-to-user-page")
const currentUserLi = document.querySelector("#current-users")
const currentUserSelect = document.querySelector("#current-user-select")
const currentUserSelectContainer = document.querySelector("#current-user-select-container")
const shelterLink = document.querySelector("#colorado-shelters")
const petsLink = document.querySelector("#browse-pets")

document.addEventListener('DOMContentLoaded', () => {
  newUserNav.addEventListener("click", () => {
    hideElement(createUser)
  })
  currentUserLi.addEventListener("click", () => {
    hideElement(currentUserSelect)
  })
  userPageButton.addEventListener("click", goToUserPage)
  shelterLink.addEventListener('click', goToShelterPage)
  petsLink.addEventListener('click', goToAvailablePets)
  fetchAnimals()
  fetchUsers()

})


function fetchAnimals(){

  fetch("http://localhost:3000/animals")
      .then(response => response.json())
      .then(animals => {
          randomAnimal = animals[Math.floor(Math.random() * animals.length)]
          displayAnimal(randomAnimal)
      })
}




function displayAnimal(animal) {
    featuredAnimal.innerHTML = ""
    image = document.createElement("img")
    animalAge = document.createElement('h4')
    animalGender = document.createElement('h4')
    animalBreed = document.createElement('h4')

    image.src = animal.picture
    image.id="featured-animal-image"

    featuredAnimalH2.innerText = `Featured Animal: ${animal.name}`
    animalAge.textContent = `Age: ${animal.age}`
    animalGender.textContent = `Gender: ${animal.gender}`
    animalBreed.textContent = `Breed: ${animal.breed}`
    featuredAnimal.append(image)
    featuredAnimalInfo.append(animalAge, animalGender, animalBreed)
}

image.addEventListener('click', refreshAnimal())

function refreshAnimal(){
  console.log()
}


function fetchUsers(){

  fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => users.map(user=> {
        let userOption = document.createElement('option')
        userOption.innerText = user.name
        userOption.value = user.id 
        userDropDown.append(userOption)
  
      }))
}

function goToUserPage(){
  window.location = `http://localhost:3001/user.html?id=${userDropDown.value}`
}

function goToShelterPage(){
  window.location = `http://localhost:3001/shelter.html`
}

function goToAvailablePets(){
  window.location = `http://localhost:3001/pets.html`
}

function hideElement(element) {
    if (element.style.opacity === "0") {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0"
    }
}

