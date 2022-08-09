const profile = {
    name: "Jan Kennu Paz",
    career: "Mobile Developer",
    hobbies: [ "Watching Series", "Eat", "Calisthenics", "Online games", "Play guitar", "Digital arts"],
    favFood: [ "Spaghetti", "Pizza", "Lasagna", "All Pasta", "Burger"],
    favSeries: [ "Friends", "One Piece", "Bakuman", "Sakurada Reset", "Brooklyn Nine Nine", "Boku no hero academia"],
    favMovies: [ "3 Idiots", "Belle", "Hacksaw Ridge"],
}

let displayMoreInfo = false

function loadInfo() {
    const name = document.getElementById("txtName")
    const career = document.getElementById("txtCareer")
    const hobbies = document.getElementById("ulHobbies")
    const favFood = document.getElementById("ulFavFood")
    const favSeries = document.getElementById("ulFavSeries")
    const favMovies = document.getElementById("ulFavMovies")

    name.innerHTML = profile.name
    career.innerHTML = profile.career
    createList(hobbies, profile.hobbies)
    createList(favFood, profile.favFood)
    createList(favSeries, profile.favSeries)
    createList(favMovies, profile.favMovies)
}

function toggleMoreInfo() {
    const hobbies = document.getElementById("ulHobbies")
    const favFood = document.getElementById("ulFavFood")
    const favSeries = document.getElementById("ulFavSeries")
    const favMovies = document.getElementById("ulFavMovies")

    displayMoreInfo = !displayMoreInfo
    setVisibility(displayMoreInfo, hobbies, favFood, favSeries, favMovies)
}
 
function createList(elementList, list) {
    list.forEach(element => {
        var node = document.createElement("LI")
        var textnode = document.createTextNode(element)
        node.appendChild(textnode)
        elementList.appendChild(node)
    })	
}

function setVisibility(isVisible, ...element) {
    element.forEach(e => {
            e.style.display = (isVisible) ? "block" : "none" 
        }
    )
}