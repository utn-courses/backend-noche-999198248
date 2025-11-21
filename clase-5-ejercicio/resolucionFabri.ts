interface Message {
  id: number;
  idUser: number;
  content: string;
  timestamp?: Date;
}

const validateMessage = (message: Message): boolean => {
  return message.idUser > 0 && message.content.length > 0 && message.content.length <= 200 && message.id > 0
};

const sendMessage = (message: Message) => {
  const valid = validateMessage(message);
  if (valid) {
    return { success: true, data: message }
  } else {
    return { success: false, error: "Invalid message" }
  }
};

const validMessage = {
  id: 1,
  idUser: 23,
  content: "Hola, ¿cómo estás?",
  timestamp: new Date(),
};

const invalidMessage = {
  id: 2,
  idUser: 0,
  content: "",
};

console.log(sendMessage(validMessage));
console.log(sendMessage(invalidMessage));