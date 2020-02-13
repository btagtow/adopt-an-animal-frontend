const param = new URLSearchParams(window.location.search)
const id = param.get('id')

const userHeader = document.querySelector('.user-header');
const homePageLink = document.querySelector('#home-page');
const browseAnimalsLink = document.querySelector('#browse-pets');
const coloradoSheltersLink = document.querySelector('#colorado-shelters');

const favoritesHeader = document.querySelector('#favorite-animals-header');
const favoriteAnimalsContainer = document.querySelector('#favorite-animals-container');

homePageLink.addEventListener("click", goToHomePage)
browseAnimalsLink.addEventListener("click", goToBrowseAnimals)
coloradoSheltersLink.addEventListener("click", goToShelters)

fetch(`http://localhost:3000/users/${id}`)
    .then(parseJSON)
    .then(displayUser)

function displayUser(user) {
    let h1 = document.createElement('h1')
    h1.innerText = `${user.name}\'s Favorite Animals:`
    userHeader.appendChild(h1)

    user.animals.map(animal => {
        let img = document.createElement('img')
        img.src = animal.picture
        favoriteAnimalsContainer.append(img)
    })  
}

function parseJSON(response) {
    return response.json()
}

function goToHomePage() {
    window.location = `http://localhost:3001/index.html`
}

function goToBrowseAnimals() {
    window.location = `http://localhost:3001/pets.html`
}

function goToShelters() {
    window.location = `http://localhost:3001/shelter.html`
}