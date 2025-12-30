import { connectDb } from "../config/mongodb.js"
import { Product } from "../models/product.model.js"

const getProducts = async () => {
  const products = await Product.find().sort({ _id: -1 })
  return products
}

const createProduct = async (data) => {
  const createdProduct = await Product.create(data)
  return createdProduct
}

const updateProduct = async (id, updates) => {
  // agenda de contactos
  // actualizar un contacto
  // 1 - encontrar el que quiero actualizar
  // 2 - modificar la data necesaria
  const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true })
  console.log(updatedProduct)
}

const deleteProduct = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id)
  return deletedProduct
}

export { getProducts, createProduct, updateProduct, deleteProduct }