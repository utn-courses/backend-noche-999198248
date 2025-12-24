import { createProduct, getProducts } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"

// servidor http
const serverHttp = express()

serverHttp.use(cors())
// Habilita la posibilidad de recibir obj json desde el front
serverHttp.use(express.json())

// callback
// OBTENER LA LISTA DE PRODUCTOS
// GET
serverHttp.get("/products", async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

// AGREGAR UN PRODUCTO
// POST
serverHttp.post("/products", async (req, res) => {
  // req -> request -> información del cliente
  const body = req.body
  // destructuring 🖥
  // desconstrucción 🧑
  const { name, price, stock, category, description } = body
  // zod, yup, express-validator
  // 🚧🚧🚧🚧 validar que me manda el frontend 🚧🚧🚧🚧🚧
  const createdProduct = await createProduct({ name, price, stock, category, description })
  res.json(createdProduct)
})

const PORT = 50000

// 0 - 65656
serverHttp.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://127.0.0.1:${PORT}`)
})