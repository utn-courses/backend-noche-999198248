import { connectDb } from "../config/mongodb.js"
import { Product } from "../models/product.model.js"


const getProducts = async () => {
  connectDb()
  const products = await Product.find().sort({ _id: -1 })
  return products
}

const createProduct = async (data) => {
  connectDb()
  const createdProduct = await Product.create(data)
  return createdProduct
}

const updateProduct = async (id, updates) => {
  // agenda de contactos
  // actualizar un contacto
  // 1 - encontrar el que quiero actualizar
  // 2 - modificar la data necesaria
  connectDb()
  const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true })
  console.log(updatedProduct)
  process.exit(1)
}

const deleteProduct = async (id) => {
  connectDb()
  const deletedProduct = await Product.findByIdAndDelete(id)
  console.log(deletedProduct)
  process.exit(1)
}

export { getProducts, createProduct, updateProduct, deleteProduct }