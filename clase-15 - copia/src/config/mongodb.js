import { connect } from "mongoose"

const URI_DB = "mongodb://localhost:27017/db_backend_utn"

const connectDb = async () => {
  try {
    await connect(URI_DB)
    console.log("Conectado con éxito!")
  } catch (error) {
    console.log("No se pudo conectar con la base de datos :(")
  }
}

export { connectDb }