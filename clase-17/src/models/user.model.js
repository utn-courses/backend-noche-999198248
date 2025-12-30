import mongoose, { Types } from "mongoose"

// const user {
//   "username": "gabolino",
//   "email": "gabolino@gmail.com",
//   "password": "pepe123"
// }

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
},
  { versionKey: false }
)

const User = mongoose.model("User", UserSchema)

export { User }