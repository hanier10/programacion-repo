//Funcion para calcular la edad

function calcularEdad(anioNacimiento){
    const currentYear = 2024;
    const edad = currentYear - anioNacimiento;

    return edad;
}

const nacimiento = 1996;
console.log(calcularEdad(nacimiento));

function edadConSaludo(year){
    const anioActual = 2024;
    const edad = anioActual - year;
    const mes = "Enero";

    const saludo = `Estimado usuario\n
    Su edad es ${edad}\n
    Y su mes de nacimiento es ${mes}
    `;

    return saludo;
}

const yearNacimiento = 1996;
// console.log(edadConSaludo(yearNacimiento));

//Calcular Si es mayor edad

function mayorDeEdad(edad){
    let mensaje;

    if(edad > 18){
        mensaje = "Usted tiene la edad, puede entrar";
    } else {
        mensaje = "Usted no puede acceder, es menor de edad";
    }

    return mensaje;
}

const miEdad = 17;
console.log(mayorDeEdad(miEdad));







