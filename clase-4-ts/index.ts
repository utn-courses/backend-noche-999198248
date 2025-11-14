let edad: number = 31
let nombre: string = "Gabriel"
let login: boolean = true

const saludar = (nombre: string): string => {
  return `Hola, ${nombre}, como estas?`
}

console.log(saludar("Gabo"))

let numeros: number[] = [1, 2, 3, 56]
let nombres: string[] = ["ana", "juan"]

interface Persona {
  id: number,
  nombre: string,
  login: boolean
}

const persona: Persona = {
  id: 1,
  nombre: "Luka",
  login: true
}

let id: number | string = "kgkg"

id = 3

// Quiero recuperar un usuario

interface Usuario {
  id: number,
  nombre: string
}

interface Respuesta {
  success: boolean,
  data?: Usuario,
  error?: string
}

const respuesta1: Respuesta = {
  success: true,
  data: {
    id: 1,
    nombre: "Luisina"
  }
}

const respuesta2: Respuesta = {
  success: false,
  error: "Error al recuperar el usuario"
}

