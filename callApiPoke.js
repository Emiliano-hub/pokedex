let container = document.getElementById('pokedex-screen');

function cargarListado() {
  fetch('https:pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (myJson) {
      poke = myJson.results;
      poke.forEach((parameter) => monstrarImg(parameter));
      // const pokemones = [];
      // pokemones[3] = {
      //   nombre: poke[1].name,
      // };
      // console.log(poke[0].url.sprites);
      // return poke[0];
      // container.innerHTML = `<img src="${persona.foto}" alt=""></img>`;
      // monstrarImg(poke[22].url);
      // console.log(poke[0]);
    });
}

function monstrarImg(url) {
  fetch(url)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (result) {
      pokemon = result.sprites.back_default;

      // console.log(pokemon);
      container.innerHTML = `<img src="${pokemon}" alt="pokemonImage">`;
    });
}
