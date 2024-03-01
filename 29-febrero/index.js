/* Crear un programa que me permita
Ingresar un numero y que en base a ese
numero pueda adivinar cual es el numero
secreto
*/

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
let acertar = false;

while (!acertar) {
  const numeroDelJugador = parseInt(prompt("Adivina el numero"));
  alert("Ahora estas jugando con el numero: " + numeroDelJugador);
  console.log(numeroSecreto);

  if (numeroSecreto === numeroDelJugador) {
    alert("Le atinaste!!! 🥳");
    acertar = true; //Aqui se detendria el programa
  } else if (numeroSecreto > numeroDelJugador) {
    alert("Su numero es muy bajo, intente con otro numero");
  } else if (numeroSecreto < numeroDelJugador) {
    alert("Su numero es muy alto, intente con otro numero");
  }
}
