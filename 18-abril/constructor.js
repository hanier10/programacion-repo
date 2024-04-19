//Funcion Constructora

/*
Funciones que se pueden instanciar 
*/

function Persona(nombre, apellido, edad){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
};


//El new me sirve para instanciar = mandar a llamar
const personaUno = new Persona("Joel", "Pauth", 22);
const personaDos = new Persona("Nerling", "Hernandez", "17");

// console.log(personaUno, personaDos);

Persona.prototype.adios = function() {
    console.log(`Adios, recuerda que mi nombre es ${this.nombre}`);
}

personaUno.adios();
personaDos.adios();


