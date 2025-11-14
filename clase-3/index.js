// archivo responsable de ejecutar sistemas
import { findUser, filterUsers, showStudentInfo, addNewStudent } from "./funciones.js"

const students = [
  {
    id: 1,
    name: "Lucas",
    lastname: "Figueroa",
    course: "Frontend"
  },
  {
    id: 2,
    name: "Mariano",
    lastname: "Gervasoni",
    course: "Frontend"
  }
]

// GETTERS

//invocación de funcion pasando el array de students como argumentos
const user = findUser(students, 1)

const users = filterUsers(students, "frontEND")

// Realizar un módulo que me devuelva un string que comunique toda la data del estudiante:
// id: 3
// ✅ "El alumno id 1 es Lucas Figueroa y participa en el curso de frontend."
// ❌ "El alumno no éxiste en nuestra base de datos."

const presentation = showStudentInfo(students, 333)

// SETTER
// Crear un módulo que agregue un "student" en la lista, el mismo tiene que ser un objeto con id, name, lastname, course

// student -> objeto
// addNewStudent
// addNewStudent(students, {id: "",  name: "Gabriel", lastname: "Alberini", course: "UX/UI"})

const id = students.length + 1
const data = addNewStudent(students, { id, name: "gabo", lastname: "Perez", course: "Lengua" })
console.log(data)

