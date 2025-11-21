interface IMessage {
  id: number,
  idUser: number,
  content: string,
  timestamp?: Date
}

// El mensaje tendrá la estructura del contrato Message
const validateMessage1 = (message: IMessage): boolean => {
  if (message.idUser < 0) {
    return false
  }

  if (message.content.length < 1 || message.content.length > 200) {
    return false
  }

  return true
}

const sendMessage1 = (message: IMessage) => {
  const valid = validateMessage1(message)

  if (!valid) {
    return { success: false, error: "Mensaje inválido" }
  } else {
    return { success: true, data: message }
  }
}

const result = sendMessage1({
  id: 1,
  idUser: 2,
  content: "Hola!",
  timestamp: new Date()
})

console.log(result)