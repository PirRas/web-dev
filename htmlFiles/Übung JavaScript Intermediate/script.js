// Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

const pokemons = [
    {name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png`},
    {name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png`},
    {name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png`},
    {name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png`},
    {name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png`},
    {name: "Vulpix", type: "Feuer", image: `${pokemonBilderQuelle}37.png`},
    {name: "Mewtu", type: "Psycho", image: `${pokemonBilderQuelle}150.png`},
    {name: "Lapras", type: "Wasser", image: `${pokemonBilderQuelle}131.png`},
    {name: "Tangela", type: "Pflanze", image: `${pokemonBilderQuelle}114.png`},
    {name: "Relaxo", type: "Normal", image: `${pokemonBilderQuelle}143.png`},
]

// HTML-Elemente
let titelsel = document.createElement("div");
titelsel.id = "title-selection";
titelsel.classList.add("container");
document.body.appendChild(titelsel);

let titel = document.createElement("h1");
titel.id = "title";
titel.textContent = "Mein Pokédex";
titelsel.appendChild(titel);

let karten = document.createElement("div");
karten.id = "pokemon-cards";
karten.classList.add("container")
document.body.appendChild(karten)

for (const pokemon of pokemons) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;
    card.appendChild(title);
    
    const image = document.createElement("img");
    image.src = pokemon.image;
    card.appendChild(image);
    
    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;
    if (pokemon.type == "Feuer") {
        type.style.color = "red";
    } else if (pokemon.type == "Wasser") {
        type.style.color = "blue";
    } else if (pokemon.type == "Pflanze") {
        type.style.color = "green";
    }
    card.appendChild(type);

    let cardElement = document.getElementById("pokemon-cards");
    cardElement.appendChild(card);
}

// Funktionen


// Event Listeners