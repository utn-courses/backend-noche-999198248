import { Product } from "../models/product.model.js"

const getProducts = async () => {
  const products = await Product.find().sort({ _id: -1 })
  return products
}

const createProduct = async (data) => {
  try {
    const createdProduct = await Product.create(data)
    return { success: true, createdProduct }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

const updateProduct = async (id, updates) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true })
  return updatedProduct
}

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    return { success: true, deletedProduct }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export { getProducts, createProduct, updateProduct, deleteProduct }