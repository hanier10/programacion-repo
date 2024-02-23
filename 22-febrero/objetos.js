//Objetos con funciones

//Enlace implicito o Implicit Binding

const falcon = {
    name: 'Falcon 9',
    mensaje: function () {
        console.log('Hola');
    }
};

falcon.mensaje(); //Hola

const perro = {
    name: 'Zeus',
    mensaje: function() {
        console.log(`Hola mi nombre es ${this.name}`);
    }
};

perro.mensaje();

//Enlaces explicitos o Explicit Bindings

function SaludoCanino(){
    console.log(`Hola el nombre del nuevo canino es ${this.name}`);
};

const newPerro = {
    name: 'Sirius',
    age: 3,
    direccion: 'En la casa de mis amos',
};

SaludoCanino.call(newPerro);








