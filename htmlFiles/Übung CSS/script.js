// Globale Variablen
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const pokemons = [
  { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
  { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
  { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
  { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
  { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` }
];


// HTML-Elemente
let firstSection = document.createElement("div");
firstSection.id = "title-section";
firstSection.classList.add("container");
document.body.appendChild(firstSection);

let title = document.createElement("h1");
title.id = "title";
title.innerText = "Pokédex";
firstSection.appendChild(title);

let pokemonCards = document.createElement("div");
pokemonCards.id = "pokemon-cards";
pokemonCards.classList.add("container");
document.body.appendChild(pokemonCards);

let detailSection = document.createElement("div");
detailSection.id = "detail-section";
detailSection.classList.add("container");
detailSection.style.display = "none";
document.body.appendChild(detailSection);

let detailCard = document.createElement("div");
detailCard.classList.add("card", "detail-card");
detailSection.appendChild(detailCard);

let detailName = document.createElement("h2");
detailCard.appendChild(detailName);

let detailImage = document.createElement("img");
detailImage.alt = "Pokemon Bild";
detailCard.appendChild(detailImage);

let detailType = document.createElement("p");
detailCard.appendChild(detailType);

let backButton = document.createElement("button");
backButton.id = "back-button";
backButton.textContent = "Zurück";
detailSection.appendChild(backButton);

// Funktionen
function showDetail(pokemon){
  detailName.textContent = pokemon.name;
  detailImage.src = pokemon.image;
  detailImage.alt = pokemon.name;
  detailType.textContent = "Typ: " + pokemon.type;

  pokemonCards.style.display = "none";
  firstSection.style.display = "none";
  detailSection.style.display = "flex";
}

function hideDetail(){
  detailSection.style.display = "none";
  pokemonCards.style.display = "flex";
  firstSection.style.display = "flex";
}


for (const pokemon of pokemons){
    
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;
    image.alt = pokemon.name;

    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;

    card.appendChild(cardTitle);
    card.appendChild(image);
    card.appendChild(type);

    card.addEventListener('click', () => {
      showDetail(pokemon);
    });

    pokemonCards.appendChild(card);
}

// Event-Listeners
backButton.addEventListener('click', () => {
  hideDetail();
});
