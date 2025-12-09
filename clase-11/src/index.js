import { connectDb } from "./config/mongodb.js"
import { Product } from "./models/product.model.js"

// const products = [
//   {
//     _id: "abcbb3b2b34b4b4b234b1b",
//     name: "Mesa de ping pong",
//     price: 1000,
//     description: "Es una mesa de roble espectacular"
//   },
//   {
//     _id: "ddd24d424d4244d4bdb4bd",
//     name: "Celular",
//     price: 2000,
//     description: "Increible celular con inteligencia artificial"
//   },
// ]

const getProducts = async () => {
  connectDb()
  const products = await Product.find()
  console.log(products)
}

getProducts()