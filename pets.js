const homePageLink = document.querySelector('#home');
const coloradoSheltersLink = document.querySelector('#colorado-shelters');

const currentUserLi = document.querySelector("#current-users");
const currentUserSelect = document.querySelector("#current-user-select");
const currentUserSelectContainer = document.querySelector("#current-user-select-container");
const userDropDown = document.querySelector('#user-dropdown')
const userPageButton = document.querySelector('#go-to-user-page')
const newUserSubmit = document.querySelector('#submit')

const createUser = document.querySelector('#create-user')
const newUserNav = document.querySelector('#new-user-nav')

homePageLink.addEventListener("click", goToHomePage)
coloradoSheltersLink.addEventListener("click", goToSheltersPage)
newUserNav.addEventListener("click", () => {
    hideElement(createUser)
  })

usersURL = "http://localhost:3000/users"

fetch(usersURL)
    .then(parseJSON)
    .then(addUserOptions)

currentUserLi.addEventListener("click", () => {
    hideElement(currentUserSelect)
})

userPageButton.addEventListener('click', goToUserPage)

function parseJSON(response) {
    return response.json()    
}

function addUserOptions(users) {
    users.map(
        user => {
            let userOption = document.createElement('option')
            userOption.innerText = user.name
            userOption.value = user.id
            userDropDown.append(userOption)
        }
    )
}

function goToHomePage() {
    window.location = `http://localhost:3001/index.html`
}

function goToSheltersPage() {
    window.location = `http://localhost:3001/shelter.html`
}

function goToUserPage(){
    window.location = `http://localhost:3001/user.html?id=${userDropDown.value}`
}

function hideElement(element) {
    if (element.style.display == "none") {
        element.style.display = "block";
    }
}


function goToAvailablePets(){
    window.location = `http://localhost:3001/pets.html`
  }