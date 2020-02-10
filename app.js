const featuredAnimalContainer = document.querySelector(".featured-animal-container")
const featuredAnimal = document.querySelector("#featured-animal")
const createUser = document.querySelector("#create-user")
const signUpButton = document.querySelector("#sign-up-button")


fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(animals => {
        randomAnimal = animals[Math.floor(Math.random() * animals.length)]
        displayAnimal(randomAnimal)
    })

function displayAnimal(animal) {
    image = document.createElement("img")
    image.src = animal.picture
    featuredAnimal.appendChild(image)
}


signUpButton.addEventListener("click", myFunction)

function myFunction() {
    if (createUser.style.display === "none") {
      createUser.style.display = "block";
    } else {
      createUser.style.display = "none";
    }
}