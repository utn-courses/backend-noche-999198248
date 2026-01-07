import { createProduct, deleteProduct, getProducts, updateProduct } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"
import { connectDb } from "./config/mongodb.js"

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
  res.json(products)
})

// AGREGAR UN PRODUCTO
// POST
serverHttp.post("/products", async (req, res) => {
  const body = req.body
  const { name, price, stock, category, description } = body
  const response = await createProduct({ name, price, stock, category, description })

  if (!response.success) {
    return res.status(400).json(response)
  }

  res.json(response)
})

// delete -> borrar un recurso
// "/products" -> un producto
serverHttp.delete("/products/:id", async (req, res) => {
  // aca entra la req
  const id = req.params.id
  console.log(id, "<- id pasado como parametro")
  const response = await deleteProduct(id)
  if (!response.success) {
    return res.status(400).json(response)
  }
  res.status(200).json(response)
})

serverHttp.patch("/products/:id", async (req, res) => {
  const id = req.params.id
  const body = req.body
  const updatedProduct = await updateProduct(id, body)
  res.json(updatedProduct)
})

// middleware (auth)
serverHttp.use((req, res) => {
  res.status(404).json({ success: false, error: "el recurso no se encuentra" })
})

const PORT = 50000

// 0 - 65656
serverHttp.listen(PORT, () => {
  console.log(`✅ Servidor http en escucha en el puerto http://127.0.0.1:${PORT}`)
  connectDb()
})