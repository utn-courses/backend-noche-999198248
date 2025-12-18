import { getProducts } from "./controllers/product.controller.js"
import express from "express"
import cors from "cors"

// servidor http
const app = express()
app.use(cors())
// Habilita la posibilidad de recibir obj json desde el front
app.use(express.json())

// callback
app.get("/products", async (req, res) => {
  const products = await getProducts()
  res.send(products)
})

app.post("/products", (req, res) => {
  // req -> request -> información del cliente
  const body = req.body

  console.log(body)

  res.json("✅ Recibido")
})

// 0 - 65656
app.listen(50000)