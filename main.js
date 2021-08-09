// FUNCTIONS?!?
// Write code which we can REUSE later.
// Organize our code better.
// Our code should be more readable.
// Our code should be easier to maintain.
// Our code should be easier to TEST/prove.
// Functions are "black boxes" - like pieces of equipment.


let pokemonImageURLs = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'
]

// In order to be able to inject new HTML content ANYWHERE we want,
// we need to be able to SEARCH the existing HTML for a place to inject
// our new content.

let pokemonHeading = document.createElement("h1")
// <h1></h1>
pokemonHeading.append("Best Pokemon")
// <h1>Pikachu</h1>
pokemonHeading.classList.add("pokemon-heading")
// <h1 class="pokemon-heading">Best Pokemon</h1>
pokemonHeading.classList.add("pikachu-yellow")
// <h1 class="pokemon-heading pikachu-yellow">Best Pokemon</h1>

let pokemonGalleryElement = document.querySelector(".pokemon-gallery")
pokemonGalleryElement.append(pokemonHeading)


for (let index = 0; index < pokemonImageURLs.length; index += 1) {
    let imageURL = pokemonImageURLs[index]

    let pokemonImage = document.createElement("img")
    pokemonImage.src = imageURL
    // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png">
    
    pokemonGalleryElement.append(pokemonImage)
}



// "append" means "add to the end of the content"
// "prepend" means "add to the beginning of the content"

// let allParagraphElements = document.querySelectorAll("p")
// console.log(allParagraphElements)