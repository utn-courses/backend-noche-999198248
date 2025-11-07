// funciones en js
// una estructura de control

// funcion nombrada
function sumar(n1, n2) {
  const resultado = n1 + n2
  return resultado
}

const resultado1 = sumar(600, 54)

// arrow function
// SI LA FUNCIÓN TIENE SOLO UNA LINEA DE CÓDIGO Y RETORNA PUEDO HACER UN RETURN IMPLICITO
const restar = (n1, n2) => n1 - n2

const resultado2 = restar(400, 90)
// console.log(resultado2)

const usarCalculadora = (operacion, n1, n2) => {
  // if (operacion === "suma") {
  //   return n1 + n2
  // } else if (operacion === "resta") {
  //   return n1 - n2
  // } else if (operacion === "multiplicacion") {
  //   return n1 * n2
  // } else if (operacion === "division") {
  //   return n1 / n2
  // } else if (operacion === "potencia") {
  //   return n1 ** n2
  // } else {
  //   return "Operacion invalida"
  // }

  // caso de estudio
  // coincidencias esperadas
  switch (operacion) {
    case "suma":
      return n1 + n2
    case "resta":
      return n1 - n2
    case "multiplicacion":
      return n1 * n2
    case "division":
      return n1 / n2
    case "potencia":
      return n1 ** n2
    default:
      return "Operación invalida"
  }
}

const resultado = usarCalculadora("potencia", 2, 3)
// console.log(resultado)

// template string -> back stick
// interpolación de js

const nombre1 = "Lucas"
const saludo = `Hola ${nombre1.toUpperCase()}`
const saludo2 = "Hola" + " " + nombre1

// console.log(saludo2)

// destructuring
const mascota1 = {
  nombre: "Arandela",
  edad: 6,
  color: "marrón",
  amigos: ["peperina", "tuerca"]
}

// destructuring del nombre de la mascota
const { nombre, edad } = mascota1

// console.log(`El nombre de mi mascota es ${nombre} y tiene ${edad} años.`)

// ----

const nameInput = "Federico"
const lastname = "Barroumeres"
const email = "fede@gmail.com"
const password = "aguanteboca"

const user = {
  name: nameInput,
  lastname,
  email,
  password
}

// console.log(user)

// cuando le asigno a un propiedad una variable que se llama igual, puedo abreviar


// Código sincrónico
// console.log("Enviando una foto")
// console.log("Enviando un chat de texto")
// console.log("Enviando un video pesado")

// Código asincrónico
// setTimeout(() => {
//   console.log("Enviando una foto")
// }, 2000);

// setTimeout(() => {
//   console.log("Enviando un chat de texto")
// }, 1000);

// setTimeout(() => {
//   console.log("Enviando un video pesado")
// }, 7000);

async function obtenerDatos() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

obtenerDatos()

