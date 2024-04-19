/*
Las clases basicamente son una estructura
o un molde que almacena un sinnumero de objetos

Una clase es más extensa y tiene mas escalabilidad
*/

class Persona{
    //el constructor es lo primero que se ejecuta
    constructor(nombre, apellido, edad){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    };
};

const personaTres = new Persona("Geovanny", "Reyes", 22);
console.log(personaTres)


