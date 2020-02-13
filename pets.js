const homePageLink = document.querySelector('#home-page');
const coloradoSheltersLink = document.querySelector('#colorado-shelters');

const currentUserLi = document.querySelector("#current-users");
const currentUserSelect = document.querySelector("#current-user-select");
const currentUserSelectContainer = document.querySelector("#current-user-select-container");
const userDropDown = document.querySelector('#user-dropdown')
const userPageButton = document.querySelector('#go-to-user-page')

const createUser = document.querySelector('#create-user')
const newUserForm = document.querySelector('#new-user-form')

homePageLink.addEventListener("click", goToHomePage)
coloradoSheltersLink.addEventListener("click", goToSheltersPage)

usersURL = "http://localhost:3000/users"

fetch(usersURL)
    .then(parseJSON)
    .then(addUserOptions)

currentUserLi.addEventListener("click", () => {
    hideElement(currentUserSelect)
})

userPageButton.addEventListener('click', goToUserPage)

newUserForm.addEventListener("click", () => {
    hideElement(createUser)
})

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
    } else {
        element.style.display = "none";
    }
}

