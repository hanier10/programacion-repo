//Operadores de Comparacion

// == Que compara un valor con el otro, una sola comparacion
const Messi = 10;
const CR7 = 7;
const otroJugador = "10";

const primeraComparacion = Messi == otroJugador;
console.log("Messi es igual a otro jugador: " + primeraComparacion);

// === Compara valor y el tipo de dato
const segundaComparacion = Messi === otroJugador;
console.log("Messi es igual al otro jugador: " + segundaComparacion);

const terceraComparacion = Messi === CR7;
console.log("Messi es igual a CR7: " + terceraComparacion);

// Negacion, !=
const cuartaComparacion = Messi != otroJugador;
console.log(
  "Messi es igual a CR7 usando operador negacion: " + cuartaComparacion
);

// Desigualdad Estricta !== Compara valor y el tipo de dato
const quintaComparacion = Messi !== otroJugador;
console.log(
  "Messi es igual a CR7 usando desigualdad estricta: " + quintaComparacion
);
