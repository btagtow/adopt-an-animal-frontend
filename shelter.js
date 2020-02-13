const shelterContainer = document.querySelector(".shelter-container") 
const petsLink = document.querySelector("#browse-pets")
const home = document.querySelector('#home')
const currentUser = document.querySelector("#current-users")
const currentUserSelect = document.querySelector("#current-user-select")
const currentUserSelectContainer = document.querySelector("#current-user-select-container")
const userDropDown = document.querySelector('#user-dropdown')
const createUser = document.querySelector("#create-user")
const newUserNav = document.querySelector("#new-user-nav")
const userPageButton = document.querySelector("#go-to-user-page")

document.addEventListener('DOMContentLoaded', () => {
    home.addEventListener("click", goHome)
    userPageButton.addEventListener("click", goToUserPage)
    createUserOptions()
    petsLink.addEventListener('click', goToAvailablePets)
    
})

fetch('http://localhost:3000/shelters')
    .then(response => response.json())
    .then(shelterDetails)



function shelterDetails(shelters){
    shelters.map(
        getShelterName
    )
}

function getShelterName(shelter){
    let shelterCard = document.createElement('shelter-card')
    let shelterName = document.createElement('h3')
    shelterName.innerText = shelter.name 
    shelterCard.className = 'shelter-details'
    shelterCard.append(shelterName)
    let shelterLink = document.createElement('h3')
    shelterLink.innerText = shelter.link 
    shelterContainer.append(shelterCard)
    shelterCard.append(shelterLink)
}

function goHome(){
    window.location = "http://localhost:3001/"
}
function createUserOptions(){
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => users
                .map(user=> {
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


currentUser.addEventListener("click", () => {
    hideElement(currentUserSelect)
  })

newUserNav.addEventListener("click", () => {
    hideElement(createUser)
})

  
  
function hideElement(element) {
    if (element.style.display === "none") {
    element.style.display = "block";
    }
}