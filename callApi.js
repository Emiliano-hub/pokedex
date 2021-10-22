let container = document.getElementById('container');

function cargarListado() {
  fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (myJson) {
      poke = myJson.results;
      poke.forEach((parameter) => crearBoton(parameter));
      // console.log(poke);
    });
}
cargarListado();

function crearBoton(pokemon) {
  let btn = `<button onclick="cargarPokemon('${pokemon.url}')">${pokemon.name}<button> `;
  container.innerHTML += btn;
  // console.log(pokemon.url);
}

function cargarPokemon(url) {
  fetch(url)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (result) {
      const pokemon = result;
      crearCarta(pokemon);
    });
}

function crearCarta(poke) {
  console.log(poke);
  let imagen = `<h2>${poke.name}</h2>
  <img src='${poke.sprites.front_default}' alt="pokemonImage">`;
  let containerPokedex = document.getElementById('pokedex-screen');
  containerPokedex.innerHTML = imagen;
}
