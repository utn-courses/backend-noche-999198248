
// encontrar el usuario segun el nombre
const findUser = (dataStudents, id) => dataStudents.find((student) => student.id === id)

// filtrar los usuarios por el curso
const filterUsers = (dataStudents, course) => dataStudents.filter((student) => student.course.toLowerCase() === course.toLowerCase())

const showStudentInfo = (dataStudents, id) => {
  // undefined
  const student = dataStudents.find((student) => student.id === id)
  if (!student) {
    return "No se encuentra el estudiante en nuestras base de datos."
  }
  return `El alumno id ${student.id} es ${student.name} ${student.lastname} y participa en el curso de ${student.course}.`
}

const addNewStudent = (dataStudents, student) => {
  // destructuring
  const { id, name, lastname, course } = student

  if (!id || !name || !lastname || !course) {
    return "Data invalida"
  }

  if (typeof id !== "number" || id < 0) {
    return "ID invalido"
  }

  //   Esa expresión regular /^[a-zA-Z0-9]+$/ significa:
  // ^ → inicio del string
  // [a-zA-Z0-9] → solo letras (mayúsculas y minúsculas) y números
  // + → uno o más caracteres válidos
  // $ → fin del string

  if (typeof name !== "string" ||
    name.length < 3 ||
    name.length > 20 ||
    !(/^[A-Za-zÀ-ÿÑñ\s'-]+$/.test(name))
  ) {
    return "Nombre invalido"
  }

  if (typeof lastname !== "string" ||
    lastname.length < 3 ||
    lastname.length > 20 ||
    !(/^[A-Za-zÀ-ÿÑñ\s'-]+$/.test(lastname))) {
    return "Apellido invalido"
  }

  if (typeof course !== "string" ||
    course.length < 3 ||
    course.length > 20 ||
    !(/^[A-Za-zÀ-ÿÑñ\s'-]+$/.test(course))) {
    return "Curso invalido"
  }

  dataStudents.push(student)
  return dataStudents
}

export { findUser, filterUsers, showStudentInfo, addNewStudent }