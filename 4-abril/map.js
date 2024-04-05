//Metodo Map
//Sumar con Metodo Map - Mapear lo que está dentro del arreglo
//Y hacer una accion determinada

const numbers = [2, 4, 6, 8, 10]; //Arreglo de numeros
const sumaConMap = numbers.map((item) => item + item);
console.log(sumaConMap);

//Convertir de Fahrenheit a Celsius sin controlar decimales

const fahrenheit = [212, 32, 95, 90, 85];
const convertirACelsius = fahrenheit.map((item) => (5 / 9) * (item - 32));
console.log(convertirACelsius);

//Convertir de F a C controlando decimales
const celsiusConDecimalControlado = fahrenheit.map((item) =>
  parseFloat(((5 / 9) * (item - 32)).toFixed(1))
);
console.log("Decimal Controlado: ", celsiusConDecimalControlado);

//forEach
