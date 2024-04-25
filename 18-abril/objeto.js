/*
Anatomia de un objeto

propiedad: valor 
key / value
*/

const persona = {
  nombre: "Nathan",
  edad: 18,
  direccion: {
    barrio: "Zona 2",
    direccion_especifica: "Hospital 200 Mts Norte",
    pais: "Nicaragua",
    departamento: "RACCS",
    municipio: "Nueva Guinea",
  },
  saludo: function () {
    console.log(`Hola mi nombre es ${this.nombre}`);
  },
};

console.log(typeof persona);

//Agregando una nueva propiedad
persona.telefono = 12345678;

//Eliminar una propiedad
delete persona.edad;

//Elimina una propiedad dentro de otra
delete persona.direccion.barrio;

// console.log(persona);
persona.saludo();


