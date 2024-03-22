//Mutabilidad en arrays

const frutas = ["manzana", "mango", "sandia", "pera", "aguacate"];

//POP, para eliminar el ultimo elemento de un array
//frutas.pop();

//SHIFT, para eliminar el primer elemento de un array
// frutas.shift();

//PUSH, para agregar un ultimo elemento al array
// frutas.push("aguacate");

//UNSHIFT, para agregar un primer elemento al array
// frutas.unshift("mandarina");

//FILTER, para filtrar un elemento
//console.log(frutas.length); //longitud o la cantidad elementos

//Funcion de flecha, retornar un valor, arrow function
const sumar = (a, b) => a + b;
//console.log(sumar(5, 6)); //11

//Funcion de sumar dos numeros
function sumarDosNumeros(num1, num2) {
  const suma = num1 + num2;

  return suma;
}
//console.log(sumarDosNumeros(10, 5)); //15

//filtrar por nombre
//startsWith: que empiece con
const filtrarPorNombre = frutas.filter((item) => item.startsWith("man"));
//console.log(filtrarPorNombre);

//filtrar, que lo encuentre y que lo elimine
//indexOf, encuentra el indice de
const filtrarYEliminar = frutas.indexOf("pera"); //3

//splice
if (filtrarYEliminar !== -1) {
  //Si 3 es diferente de -1
  // frutas.splice(filtrarYEliminar, 2, "uva");
}

//sort, de ordenamiento
frutas.sort(); //funciona bien para strings
// console.log(frutas);

const numeros = [5, 14, 9, 25, 1];
// numeros.sort();
// console.log(numeros);
numeros.sort((a, b) => a - b);

//1ra Vuelta 5, 14, 9, 25, 1
//2da Vuelta 5, 9, 14, 25, 1
//3ra Vuelta 5, 9, 14, 25, 1
//4ta Vuelta 5, 9, 14, 1, 25
console.log(numeros);
