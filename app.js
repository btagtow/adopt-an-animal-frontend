const featuredAnimalContainer = document.querySelector(".featured-animal-container")
const featuredAnimal = document.querySelector("#featured-animal")
const createUser = document.querySelector("#create-user")
const signUpButton = document.querySelector("#sign-up-button")
//yo

fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(animals => {
        randomAnimal = animals[Math.floor(Math.random() * animals.length)]
        displayAnimal(randomAnimal)
    })

function displayAnimal(animal) {
    image = document.createElement("img")
    animalName = document.createElement('h2')
    animalAge = document.createElement('h4')
    animalGender = document.createElement('h4')
    animalBreed = document.createElement('h4')

    image.src = animal.picture

    animalName.textContent = `Name: ${animal.name}`
    animalAge.textContent = `Age: ${animal.age}`
    animalGender.textContent = `Gender: ${animal.gender}`
    animalBreed.textContent = `Name: ${animal.breed}`
    featuredAnimal.append(image, animalName, animalAge, animalGender, animalBreed)
}

signUpButton.addEventListener("click", myFunction)

function myFunction() {
    if (createUser.style.display === "none") {
      createUser.style.display = "block";
    } else {
      createUser.style.display = "none";
    }
}