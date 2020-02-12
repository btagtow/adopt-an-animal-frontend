const param = new URLSearchParams(window.location.search)
const id = param.get('id')
const userHeader = document.querySelector('.user-header');
const 

console.log(userHeader)

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let h1 = document.createElement('h1')
        h1.innerText = `${user.name}\'s Favorite Animals:`
        userHeader.appendChild(h1)
    })

fetch(`http://localhost:3000/animals`)
    .then(response => response.json())
    .then(animals => animals.forEach(addAnimalOption))

// function addAnimalOption(animal) {
//     let animalOption = document.createElement('option')
//     animalOption.innerText = animal.name
// }