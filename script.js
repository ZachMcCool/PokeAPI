const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let newPokemon = document.getElementById("newPokemon");
let pokemonContainer = document.getElementById("pokeball");

// Button fetches
document.getElementById("kanto").addEventListener("click", fetchKanto);
document.getElementById("johto").addEventListener("click", fetchJohto);
document.getElementById("hoenn").addEventListener("click", fetchHoenn);
document.getElementById("sinnoh").addEventListener("click", fetchSinnoh);
document.getElementById("unova").addEventListener("click", fetchUnova);
document.getElementById("kalos").addEventListener("click", fetchKalos);
document.getElementById("alola").addEventListener("click", fetchAlola);
document.getElementById("galar").addEventListener("click", fetchGalar);
document.getElementById("random").addEventListener("click", fetchRandom);

fetchKanto();

//Fetch a random pokemon
async function fetchRandom() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let r = randomNumber(1, 898);

  pokemonContainer.innerHTML = "";
  {
    const response = await fetch(`${baseURL}${r}`);
    const json = await response.json();
    displayPokemonLarge(json);
    console.log(json);
  }
}

// Function to fetch Kanto Pokemon
async function fetchKanto() {
  pokemonContainer.innerHTML = "";
  for (let i = 1; i <= 151; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// Function to fetch Johto Pokemon
async function fetchJohto() {
  pokemonContainer.innerHTML = "";
  for (let i = 152; i <= 251; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to fetch Hoenn Pokemon
async function fetchHoenn() {
  pokemonContainer.innerHTML = "";
  for (let i = 252; i <= 386; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to Sinnoh Pokemon
async function fetchSinnoh() {
  pokemonContainer.innerHTML = "";
  for (let i = 387; i <= 493; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to fetch Unova Pokemon
async function fetchUnova() {
  pokemonContainer.innerHTML = "";
  for (let i = 494; i <= 649; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to fetcg Kalos Pokemon
async function fetchKalos() {
  pokemonContainer.innerHTML = "";
  for (let i = 650; i <= 721; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to fetch Alola Pokemon
async function fetchAlola() {
  pokemonContainer.innerHTML = "";
  for (let i = 722; i <= 809; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

// function to fetch Galar Pokemon
async function fetchGalar() {
  pokemonContainer.innerHTML = "";
  for (let i = 810; i <= 898; i++) {
    const response = await fetch(`${baseURL}${i}`);
    const json = await response.json();
    displayPokemon(json);
  }
}

function displayPokemon(pokemon) {
  let pokemonContainer = document.getElementById("pokeball");

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
  pokeCard.className = "pokeCard";
  pokeCard.style =
    "height: fit-content; width: 200px; background-color: rgba(255, 255, 255, 0.5); border-radius: 20%; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
  pokeIMG.className = "pokeIMG";
  pokeIMG.style = "height: 150px; width: 150px;";
  pokeName.idname = "pokeName";
  pokeName.className = "pokeName";
  pokeName.style = "width: fit-content; margin: 1rem auto";
  pokeType.className = "types";
  pokeType.style =
    "display: flex; flex-wrap: wrap; text-transform: capitalize; width: 160px; margin: auto;";
  // pokeType.style = "text-transform: capitalize;";

  // pulls images from the API
  if ((pokeIMG.src = pokemon.sprites.other.dream_world.front_default == null)) {
    pokeIMG.src = pokemon.sprites.front_default;
  } else {
    pokeIMG.src = pokemon.sprites.other.dream_world.front_default;
  }

  // Changes our Pokemon Number from 001 to #001
  pokeID.innerText = `
  #${padID}
  `;

  //uses our previous function to capitilize our pokemon's names

  // When you click name fetch pokemonContainerLarge with the selected pokemon's info

  pokeName.innerHTML = `${capName}`;

  pokeName.addEventListener("click", fetchSpecific);

  async function fetchSpecific() {
    pokemonContainer.innerHTML = "";
    {
      const response = await fetch(`${baseURL}${pokemon.name}`);
      const json = await response.json();
      displayPokemonLarge(json);
      console.log(json);
    }
  }

  // uses our previous function to display pokemon types
  //! Not in use replaced with Pokemon Types on line 94, keep for testing
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
  if (types.includes("ghost")) {
    let ghost = document.createElement("div");
    ghost.innerHTML = "ghost";
    ghost.style =
      "background-color: black; color: pink; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(ghost);
  }
  if (types.includes("steel")) {
    let steel = document.createElement("div");
    steel.innerHTML = "steel";
    steel.style =
      "background-color: lightgrey; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(steel);
  }
  if (types.includes("dark")) {
    let dark = document.createElement("div");
    dark.innerHTML = "dark";
    dark.style =
      "background-color: black; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(dark);
  }
}

function displayPokemonLarge(pokemon) {
  console.log(pokemon);
  let pokemonContainer = document.getElementById("pokeball");

  // Creates new elements to add to our HTML
  let pokeCard = document.createElement("div");
  let pokeIMG = document.createElement("img");
  let pokeID = document.createElement("p");
  let pokeName = document.createElement("h3");
  let pokeType = document.createElement("div");
  let pokeStats = document.createElement("div");
  let statBlock = document.createElement("div");
  let pokeWeight = document.createElement("div");

  // Capitilizes the name of the pokemon, would've been easier to just do it in CSS
  let capName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // takes the types as written ex: bug,poison and changes the text to bug/poison
  let types = `${pokemon.types.map((el) => el.type.name)}`.split(",").join("/");

  // Changes the pokemon number to be 3 digits starting with 0s, ex: 5 becomes 005
  let padID = `${pokemon.id.toString().padStart(3, "0")}`;

  // Classes and styling for our new elements
  pokeCard.classname = "pokeCard";
  pokeCard.style =
    "height: fit-content; width: fit-content; background-color: rgba(255, 255, 255, 0.5); border-radius: 15px; margin: 1rem; padding: 1rem;-webkit-box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);";
  pokeIMG.className = "pokeIMG";
  // pokeIMG.style = "width: 500px; height: 500px;";
  pokeType.className = "types";
  pokeType.style =
    "display: flex; flex-wrap: wrap; text-transform: capitalize; width: fit-content; margin: auto;";

  pokeStats.style = "width: 75%; margin: auto;";
  statBlock.style =
    "text-align: left; text-transform: capitalize; list-style-type: none;";

  // statBlock.style = "display: flex; flex-wrap: wrap;";
  statBlock.innerHTML = `

  <div><strong>${pokemon.stats[0].stat.name}</strong> ${pokemon.stats[0].base_stat}</div>
  <div><strong>${pokemon.stats[1].stat.name}</strong> ${pokemon.stats[1].base_stat}</div>
  <div><strong>${pokemon.stats[2].stat.name}</strong> ${pokemon.stats[2].base_stat}</div>
  <div><strong>${pokemon.stats[3].stat.name}</strong> ${pokemon.stats[3].base_stat}</div>
  <div><strong>${pokemon.stats[4].stat.name}</strong> ${pokemon.stats[4].base_stat}</div>
  <div><strong>${pokemon.stats[5].stat.name}</strong> ${pokemon.stats[4].base_stat}</div>
  <div><strong>Weight</strong> ${pokemon.weight}</div>
  <br>

  `;

  // pulls images from the API
  if ((pokeIMG.src = pokemon.sprites.other.dream_world.front_default == null)) {
    pokeIMG.src = pokemon.sprites.front_default;
  } else {
    pokeIMG.src = pokemon.sprites.other.dream_world.front_default;
  }

  // Changes our Pokemon Number from 001 to #001
  pokeID.innerText = `
  #${padID}
  `;

  //uses our previous function to capitilize our pokemon's names
  pokeName.innerText = `
${capName}
  `;

  // uses our previous function to display pokemon types
  //! Not in use replaced with Pokemon Types on line 94, keep for testing
  // pokeType.innerText = `${types}`;

  // Append the Elements we created to the pokemonContainer
  pokemonContainer.appendChild(pokeCard);

  // Appends the elements we create to the Pokecard
  pokeCard.appendChild(pokeIMG);
  pokeCard.appendChild(pokeID);
  pokeCard.appendChild(pokeName);
  pokeCard.appendChild(pokeStats);
  pokeCard.appendChild(pokeType);

  pokeStats.appendChild(statBlock);
  pokeStats.appendChild(pokeWeight);

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
  if (types.includes("ghost")) {
    let ghost = document.createElement("div");
    ghost.innerHTML = "ghost";
    ghost.style =
      "background-color: black; color: pink; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(ghost);
  }
  if (types.includes("steel")) {
    let steel = document.createElement("div");
    steel.innerHTML = "steel";
    steel.style =
      "background-color: lightgrey; color: black; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(steel);
  }
  if (types.includes("dark")) {
    let dark = document.createElement("div");
    dark.innerHTML = "dark";
    dark.style =
      "background-color: black; color: white; width: 75px; border-radius: 15px; margin: auto;";
    pokeType.appendChild(dark);
  }
}
