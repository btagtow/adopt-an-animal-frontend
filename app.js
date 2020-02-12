const featuredAnimalContainer = document.querySelector(".featured-animal-container")
const featuredAnimal = document.querySelector("#featured-animal")
const featuredAnimalInfo = document.querySelector("#featured-animal-info")
const createUser = document.querySelector("#create-user")
const signUpButton = document.querySelector("#sign-up-button")
const userDropDown = document.querySelector('#user-dropdown')
const newUserForm = document.querySelector("#new-user-form")
const newUserPTag = document.querySelector("#new-user-p-tag")
const userPageButton = document.querySelector("#go-to-user-page")
const currentUserLi = document.querySelector("#current-users")
const currentUserSelect = document.querySelector("#current-user-select")
const currentUserSelectContainer = document.querySelector("#current-user-select-container")
const shelterLink = document.querySelector("#colorado-shelters")
const petsLink = document.querySelector("#browse-pets")

fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(animals => {
        randomAnimal = animals[Math.floor(Math.random() * animals.length)]
        displayAnimal(randomAnimal)
    })

function displayAnimal(animal) {
    image = document.createElement("img")
    featuredAnimalH2 = document.querySelector("#featured-animal-h2")
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

fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => users.map(user=> {
      let userOption = document.createElement('option')
      userOption.innerText = user.name
      userOption.value = user.id 
      userDropDown.append(userOption)

    }))

userPageButton.addEventListener("click", goToUserPage)
shelterLink.addEventListener('click', goToShelterPage)
petsLink.addEventListener('click', goToAvailablePets)

function goToUserPage(){
  window.location = `http://localhost:3001/user.html?id=${userDropDown.value}`
}

function goToShelterPage(){
  window.location = `http://localhost:3001/shelter.html`
}

function goToAvailablePets(){
  window.location = `http://localhost:3001/pets.html`
}

newUserForm.addEventListener("click", () => {
  hideElement(createUser)
})

currentUserLi.addEventListener("click", () => {
  hideElement(currentUserSelect)
})


function hideElement(element) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
}