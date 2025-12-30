import { User } from "../models/user.model.js"
import { connectDb } from "../config/mongodb.js"

const getUsers = async () => {
  await connectDb()
  const users = await User.find()
  console.log(users)
}

const addUser = async (dataUser) => {
  connectDb()
  const createdUser = await User.create(dataUser)
  console.log(createdUser)
  process.exit(1)
}

const updateUser = async (id, updates) => {
  connectDb()
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true })
  console.log(updatedUser)
  process.exit(1)
}

const deleteUser = async (id) => {
  connectDb()
  const removedUser = await User.findByIdAndDelete(id)
  console.log(removedUser)
  process.exit(1)
}