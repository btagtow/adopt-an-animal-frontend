const shelterCard = document.querySelector('shelter-card')
const home = document.querySelector('#home')
const currentUser = document.querySelector("#current-users")
const currentUserSelect = document.querySelector("#current-user-select")
const currentUserSelectContainer = document.querySelector("#current-user-select-container")

const userDropDown = document.querySelector('#user-dropdown')


console.log(shelterCard)

document.addEventListener('DOMContentLoaded', () => {
    home.addEventListener("click", goHome)
    currentUser.addEventListener('click', () => {
        createUserOptions()
        appendUserOptions(userOption)
    })
    
})

fetch('http://localhost:3000/shelters')
    .then(response => response.json())
    .then(shelters => {
        shelterDetails(shelters)
        
    })



function shelterDetails(shelters){
    shelters.map(shelter => {
        
    })
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


currentUser.addEventListener("click", () => {
    hideElement(currentUserSelect)
  })
  
  
function hideElement(element) {
    if (element.style.display === "none") {
    element.style.display = "block";
    } else {
    element.style.display = "none";
    }
}