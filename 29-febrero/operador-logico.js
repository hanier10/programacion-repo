//Operador Logico
const charmander = "Fuego";
const pikachu = "Trueno";
const charizard = "Fuego";
const otroPokemon = "Fuego";

// && Y
const comparacion1 = charmander && charizard == "Fuego";
console.log("Charmander y Charizard son tipo fuego: " + comparacion1);

const comparacion2 = charmander && pikachu == "Fuego";
console.log("Charmander y Pikachu son tipo fuego: " + comparacion2);

// || Barra vertical significa O
const comparacion3 =
  (charmander && pikachu == "Fuego") || charizard === pikachu;
console.log(comparacion3);

// NO !
const comparacion4 = !(charmander === pikachu);
console.log(comparacion4);
