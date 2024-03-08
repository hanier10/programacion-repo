//Estructura Condicional
/*
Un programa que le pregunte al usuario
qué fruta desea saber el precio
y que el programa le diga cuánto vale la fruta
*/

const producto = ["manzana", "pera", "uva", "sandia"];

alert("Bienvenido a su tienda El Baratillo");
alert(`Tenemos ${producto}`);
alert("De qué fruta desea conocer el precio?");

const frutaElegida = prompt("Escriba la fruta");
switch (frutaElegida) {
  case producto[0]:
    alert("La media docena de manzanas vale 180 cordobas");
    break; //Aqui finaliza mi programa

  case producto[1]:
    alert("La media docena de peras vale 20 cordobas");
    break;

  case producto[2]:
    alert("La libra de uva vale 150 cordobas");
    break;

  case producto[3]:
    alert("La sandia por unidad vale 120 cordobas");
    break;

  default:
    alert("No tenemos esa fruta, pa la proxima");
}
