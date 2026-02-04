const BASE_API = "http://localhost:50000/products"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTgyN2NjMmExOTMwYjkxNmEyODYwNDciLCJ1c2VybmFtZSI6Ik51ZXZvIHVzdWFyaW8iLCJlbWFpbCI6ImdhYmlhbGJlcmluaTczM0BnbWFpbC5jb20iLCJpYXQiOjE3NzAxNjUwMjQsImV4cCI6MTc3MDE2ODYyNH0.PjWoc1nST-agoS6RWqgpgqzXUJWIHOqQW8uU715c1Fw"

const getProducts = async () => {
  const res = await fetch(`${BASE_API}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN
    }
  })

  return res
}

const createProduct = async (productData) => {
  const res = await fetch(`${BASE_API}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  })

  return res
}

const updateProduct = async (editingProduct, updates) => {
  const res = await fetch(`${BASE_API}/${editingProduct._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN
    },
    body: JSON.stringify(updates)
  })

  return res
}

const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + TOKEN
    }
  })
  return res
}

export { getProducts, createProduct, updateProduct, deleteProduct }