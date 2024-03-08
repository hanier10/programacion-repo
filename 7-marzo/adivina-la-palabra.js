/*
Este programa va a pedirle una palabra secreta
al usuario y tendrá tres intentos para adivinarla
*/

let palabraSecreta = "javascript";
let intentos = 3;

alert("Bienvenido al juego de Adivina la palabra");
alert("---Pista-- La palabra secreta es un lenguaje de prog");

while (intentos > 0) {
  const palabraJugador = prompt("Escribe tu palabra secreta");
  if (palabraJugador === palabraSecreta) {
    alert("Acertaste, esa era la palabra secreta");
    break; //Aqui detengo el programa
  } else {
    intentos--;
    if (intentos > 0) {
      alert(`Incorrecto, pero aun tienes ${intentos} intentos`);
    } else {
      alert(`Agotaste tus intentos, la palabra secreta era ${palabraSecreta}`);
    }
  }
}
