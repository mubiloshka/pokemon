

// import pokemons from "./pokemons.js";

// let containerPokemons = document.querySelector('.containerPokemons')
// let pokemonType = document.querySelector('#pokemonType')
// let searchButton = document.getElementById('searchButton')
// let searchPokemon = document.getElementById('searchPokemon')

// function generator(pokemon){
//     containerPokemons.innerHTML = ''
//     pokemon.forEach(element => {
//         let card = document.createElement('div')
//         card.classList.add('card');
//         card.innerHTML = `
            // <h1 class="pokemon-name">${element.name}</h1>
            // <img src=${element.img} alt="" class="pokemon-img">
            // <p class="pokemon-type">
            //     ${element.type}
            // </p>
            // <p class="pokemon-weight">
            //     ${element.weight}
            // </p>
//         `;
//         containerPokemons.appendChild(card)
//     });
// }

// function filterAndSortPokemons() {
//     let filteredPokemons = pokemons;

//     // Фильтрация
//     const searchValue = searchPokemon.value.toLowerCase();
//     if (searchValue) {
//         filteredPokemons = filteredPokemons.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(searchValue)
//         );
//     }
//     // Генерация карточек
//     generator(filteredPokemons);
// }

// searchButton.addEventListener("click", filterAndSortPokemons);
// searchPokemon.addEventListener("input", filterAndSortPokemons);

// generator(pokemons)



import pokemons from './pokemons.js';

let containerPokemons = document.querySelector('.containerPokemons');
let pokemonType = document.querySelector('#pokemonType');
let searchButton = document.getElementById('searchButton');
let searchPokemon = document.getElementById('searchPokemon');
let pokemonFilter = document.getElementById('pokemonFilter');

function generator(pokemon) {
  containerPokemons.innerHTML = '';
  pokemon.forEach(element => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h1 class="pokemon-name">${element.name}</h1>
      <img src="${element.img}" alt="${element.name}" class="pokemon-img">
      <p class="pokemon-type">
        ${Array.isArray(element.type) ? element.type.join(', ') : element.type}
      </p>
      <p class="pokemon-weight">
        ${element.weight}
      </p>
    `;
    containerPokemons.appendChild(card);
  });
}

function filterAndSortPokemons() {
  let filteredPokemons = pokemons;

  const searchValue = searchPokemon.value.toLowerCase().trim();
  if (searchValue) {
    filteredPokemons = filteredPokemons.filter(p =>
      p.name.toLowerCase().includes(searchValue)
    );
  }
  const selectedType = pokemonType.value;
  if (selectedType !== 'all') {
    filteredPokemons = filteredPokemons.filter(p =>
      Array.isArray(p.type) ? p.type.join(' ').includes(selectedType) : p.type.includes(selectedType)
    );
  }
  const sortValue = pokemonFilter.value;
  if (sortValue === 'alphabeticalAsc') {
    filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === 'alphabeticalDesc') {
    filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortValue === 'weightAsc') {
    filteredPokemons.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
  } else if (sortValue === 'weightDesc') {
    filteredPokemons.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  }

  generator(filteredPokemons);
}



searchButton.addEventListener("click", filterAndSortPokemons);
searchPokemon.addEventListener("input", filterAndSortPokemons);




pokemonType.addEventListener("change", filterAndSortPokemons);
pokemonFilter.addEventListener("change", filterAndSortPokemons);




//         card.classList.add('card');
//         card.innerHTML = `
            // <h1 class="pokemon-name">${element.name}</h1>
            // <img src=${element.img} alt="" class="pokemon-img">
            // <p class="pokemon-type">
            //     ${element.type}
            // </p>
            // <p class="pokemon-weight">
            //     ${element.weight}
            // </p>
//         `;
//         containerPokemons.appendChild(card)



generator(pokemons);
