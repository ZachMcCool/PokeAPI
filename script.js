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
// fetch(baseURL)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// newPokemon.addEventListener("click", fetchPokemon);
fetchPokemon();
async function fetchPokemon() {
  // For loops takes all pokemon in the array up to a specified number
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

function displayPokemon(pokemon) {
  // Creates new elements to add to our HTML
  let pokeCard = document.createElement("div");
  let pokeIMG = document.createElement("img");
  let pokeID = document.createElement("p");
  let pokeName = document.createElement("h3");
  let pokeType = document.createElement("div");

  // Capitilizes the name of the pokemon, would've been easier to just do it in CSS
  let capName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // takes the types as written ex: bug,poison and changes the text to bug/poison
  let types = `${pokemon.types.map((el) => el.type.name)}`.split(",").join("/");

  // Changes the pokemon number to be 3 digits starting with 0s, ex: 5 becomes 005
  let padID = `${pokemon.id.toString().padStart(3, "0")}`;

  // Classes and styling for our new elements
  pokeCard.classname = "pokeCard";
  pokeCard.style =
    "height: fit-content; width: 200px; background-color: rgba(255, 255, 255, 0.7); border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
  pokeIMG.classname = "pokeIMG";
  pokeIMG.style = "height: 150px; width: 150px;";
  pokeID.classname = "pokeID";
  pokeName.classname = "pokeName";
  pokeType.classname = "types";
  pokeType.style =
    "display: flex; flex-wrap: wrap; text-transform: capitalize; width: 160px; margin: auto;";
  // pokeType.style = "text-transform: capitalize;";

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
  // pokeType.innerText = `${types}`;

  // Append the Elements we created to the pokemonContainer
  pokemonContainer.appendChild(pokeCard);

  // Appends the elements we create to the Pokecard
  pokeCard.appendChild(pokeIMG);
  pokeCard.appendChild(pokeID);
  pokeCard.appendChild(pokeName);
  pokeCard.appendChild(pokeType);

  // Creates and appends the Pokemon's type
  if (types.includes("normal")) {
    let normal = document.createElement("div");
    normal.innerHTML = "normal";
    normal.style =
      "background-color: white; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(normal);
  }
  if (types.includes("fire")) {
    let fire = document.createElement("div");
    fire.innerHTML = "fire";
    fire.style =
      "background-color: red; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(fire);
  }
  if (types.includes("bug")) {
    let bug = document.createElement("div");
    bug.innerHTML = "bug";
    bug.style =
      "background-color: chartreuse ; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(bug);
  }
  if (types.includes("grass")) {
    let grass = document.createElement("div");
    grass.innerHTML = "grass";
    grass.style =
      "background-color: green; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(grass);
  }
  if (types.includes("electric")) {
    let electric = document.createElement("div");
    electric.innerHTML = "electric";
    electric.style =
      "background-color: yellow; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(electric);
  }
  if (types.includes("rock")) {
    let rock = document.createElement("div");
    rock.innerHTML = "rock";
    rock.style =
      "background-color: grey; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(rock);
  }
  if (types.includes("water")) {
    let water = document.createElement("div");
    water.innerHTML = "water";
    water.style =
      "background-color: blue; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(water);
  }
  if (types.includes("poison")) {
    let poison = document.createElement("div");
    poison.innerHTML = "poison";
    poison.style =
      "background-color: purple; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(poison);
  }
  if (types.includes("ground")) {
    let ground = document.createElement("div");
    ground.innerHTML = "ground";
    ground.style =
      "background-color: brown; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(ground);
  }
  if (types.includes("fairy")) {
    let fairy = document.createElement("div");
    fairy.innerHTML = "fairy";
    fairy.style =
      "background-color: pink; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(fairy);
  }

  if (types.includes("dragon")) {
    let dragon = document.createElement("div");
    dragon.innerHTML = "dragon";
    dragon.style =
      "background-color: darkblue; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(dragon);
  }

  if (types.includes("psychic")) {
    let psychic = document.createElement("div");
    psychic.innerHTML = "psychic";
    psychic.style =
      "background-color: deeppink; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(psychic);
  }

  if (types.includes("ice")) {
    let ice = document.createElement("div");
    ice.innerHTML = "ice";
    ice.style =
      "background-color: cyan; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(ice);
  }

  if (types.includes("flying")) {
    let flying = document.createElement("div");
    flying.innerHTML = "flying";
    flying.style =
      "background-color: lightskyblue; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(flying);
  }

  if (types.includes("fighting")) {
    let fighting = document.createElement("div");
    fighting.innerHTML = "fighting";
    fighting.style =
      "background-color: orange; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(fighting);
  }
}

// if (types.includes("fire")) {
//   pokeCard.style =
//     "height: fit-content; width: 200px; background-color: #FDDFDD; border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
// } else if (types.includes("grass")) {
//   pokeCard.style =
//     "height: fit-content; width: 200px; background-color: #DEFDE0; border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
// } else if (types.includes("electric")) {
//   pokeCard.style =
//     "height: fit-content; width: 200px; background-color: #FCF7DE; border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
// } else if (types.includes("water")) {
//   pokeCard.style =
//     "height: fit-content; width: 200px; background-color: rgba(222, 243, 253, 1); border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
// }
