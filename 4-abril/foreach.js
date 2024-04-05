//forEach - Para cada uno
const numbers = [1, 2, 3, 4];
let sum = 0; //repetidor
const sumaConForEach = numbers.forEach((item) => {
  sum = item + sum;
});
console.log("valor en numbers: ", sum);

//Reduce - sintetizar en un solo valor los numeros del arreglo
const sumaConReduce = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("valor con reduce: ", sumaConReduce);

//Spread Operator - Operador de expansion

function sumarNuevo(a, b, c, d) {
  const suma = a + b + c + d;

  return suma;
}

console.log(sumarNuevo(...numbers));
