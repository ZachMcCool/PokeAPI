const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let newPokemon = document.getElementById("newPokemon");
let pokemonContainer = document.getElementById("pokeball");

let colors = {
  fire: `#FDDFDD`,
  grass: `#DEFDE0`,
  electric: `#FCF7DE`,
  water: `#DEF3FD`,
  ground: `#f4e7da`,
  rock: `#d5d5d4`,
  fairy: `#fceaff`,
  poison: `#98d7a5`,
  bug: `#f8d5a3`,
  dragon: `#97b3e6`,
  psychic: `#eaeada1`,
  flying: `#F5F5F5`,
  fighting: `#E6E0D4`,
  normal: `#F5F5F5`,
};

// covert URL to JSON so we can read it in the inspect tool
fetch(baseURL)
  .then((response) => response.json())
  .then((json) => console.log(json));

// newPokemon.addEventListener("click", fetchPokemon);
fetchPokemon();
function fetchPokemon() {
  // For loops takes all pokemon in the array up to a specified number
  for (let i = 1; i <= 151; i++) {
    // Math.floor(Math.random() * 150) + 1
    fetch(`${baseURL}${i}`) // 1 needs to be a random number within the array
      .then((response) => response.json())
      .then((json) => displayPokemon(json))
      .catch((err) => console.log(err));
  }
}

function displayPokemon(pokemon) {
  // Creates new elements to add to our HTML
  let pokeCard = document.createElement("div");
  let pokeIMG = document.createElement("img");
  let pokeID = document.createElement("p");
  let pokeName = document.createElement("h3");
  let pokeType = document.createElement("p");

  // Capitilizes the name of the pokemon, would've been easier to just do it in CSS
  let capName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // takes the types as written ex: bug,poison and changes the text to bug/poison
  let types = `${pokemon.types.map((el) => el.type.name)}`.split(",").join("/");

  // Changes the pokemon number to be 3 digits starting with 0s, ex: 5 becomes 005
  let padID = `${pokemon.id.toString().padStart(3, "0")}`;

  // Classes and styling for our new elements
  pokeCard.classname = "pokeCard";
  pokeCard.style =
    "height: fit-content; width: 200px; background-color: rgba(255, 255, 255, 0.7); border-radius: 20%; margin: 1rem; padding: 1rem;";
  pokeIMG.classname = "pokeIMG";
  pokeIMG.style = "height: 150px; width: 150px;";
  pokeID.classname = "pokeID";
  pokeName.classname = "pokeName";
  pokeType.classname = "types";
  pokeType.style = "text-transform: capitalize;";

  // pulls images from the API
  pokeIMG.src = pokemon.sprites.other.dream_world.front_default;

  // Changes our Pokemon Number from 001 to #001
  pokeID.innerText = `
  #${padID}
  `;

  //uses our previous function to capitilize our pokemon's names
  pokeName.innerText = `
${capName}
  `;

  // uses our previous function to display pokemon types
  pokeType.innerText = `${types}`;

  // Append the Elements we created to the pokemonContainer
  pokemonContainer.appendChild(pokeCard);

  // Appends the elements we create to the Pokecard
  pokeCard.appendChild(pokeIMG);
  pokeCard.appendChild(pokeID);
  pokeCard.appendChild(pokeName);
  pokeCard.appendChild(pokeType);
}
