/*
1. Permita colocar su usuario y password
2. Si los datos son correctos entonces que diga bienvenido
y que muestre el perfil de la persona
3. Si los datos son erroneos que me envia un mensaje
de datos incorrectos pero que no me muestre el perfil
*/

const usuariosBaseDeDatos = [
  {
    username: "nathan",
    password: "1234",
  },
  {
    username: "adonis",
    password: "12345678",
  },
  {
    username: "bryan",
    password: "2024",
  },
];

const muroDelUsuario = [
  {
    username: "masiel",
    perfil: "un buen meme",
  },
  {
    username: "alberth",
    perfil: "publico una nueva foto de perfil",
  },
  {
    username: "cindy",
    perfil: "compartio un video de tiktok",
  },
];

const username = prompt("Ingrese su usuario");
const password = prompt("Ingrese su password");

function usuarioExistente(username, password) {
  for (let i = 0; i < usuariosBaseDeDatos.length; i++) {
    if (
      usuariosBaseDeDatos[i].username === username &&
      usuariosBaseDeDatos[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function inicioSesion(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a su cuenta ${username}`);
    console.log(muroDelUsuario);
  } else {
    alert("Wooops!! Usuario o Password Incorrectos");
  }
}

inicioSesion(username, password);
