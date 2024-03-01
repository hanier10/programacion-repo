//Funcion para calcular la edad

function calcularEdad(anioNacimiento) {
  const currentYear = 2024;
  const edad = currentYear - anioNacimiento;

  return edad;
}

const nacimiento = 1996;
console.log(calcularEdad(nacimiento, mes));

function edadConSaludo(year, mes) {
  const anioActual = 2024;
  const edad = anioActual - year;
  mes = ["Enero", "Febrero", "Marzo"];
  const saludo = `Estimado usuario\n
    Su edad es ${edad}\n
    Y su mes de nacimiento es ${mes}
    `;

  return saludo;
}

const yearNacimiento = 1996;
const mesEscogido = edadConSaludo(yearNacimiento, mes[0]);
console.log(edadConSaludo(yearNacimiento, mes[0]));

//Calcular Si es mayor edad

function mayorDeEdad(edad) {
  let mensaje;

  if (edad > 18) {
    mensaje = "Usted tiene la edad, puede entrar";
  } else {
    mensaje = "Usted no puede acceder, es menor de edad";
  }

  return mensaje;
}

const miEdad = 17;
console.log(mayorDeEdad(miEdad));
