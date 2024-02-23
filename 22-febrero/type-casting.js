//Conversion de tipos

//Conversion implicita

const stringValue = "55";
const numberValue = 5;
const booleanValue = true;
// console.log(typeof numberValue);

const muestraOne = stringValue + numberValue; // 555
// console.log(muestraOne);

const muestraTwo = numberValue + booleanValue; // 6
// console.log(muestraTwo);

const muestraThree = numberValue + stringValue; // 555
// console.log(muestraThree);

//Strings
console.log('Strings --------------');
console.log(stringValue + stringValue); //5555
console.log(stringValue + numberValue); //555
console.log(stringValue + booleanValue); //55true

//Numbers
console.log('Numbers---------------');
console.log(numberValue + stringValue); //555
console.log(numberValue + numberValue); //10
console.log(numberValue + booleanValue); //6

//Booleanos
console.log('Booleans---------------');
console.log(booleanValue + stringValue); //true55
console.log(booleanValue + numberValue); //6
console.log(booleanValue + booleanValue); //2
