// http://localhost:50000/products
// https://rickandmortyapi.com/api/character

// referencia a los elementos html
const $form = document.querySelector("form")
const $name = document.getElementById("name")
const $price = document.getElementById("price")
const $stock = document.getElementById("stock")
const $category = document.getElementById("category")
const $description = document.getElementById("description")

const $section = document.querySelector("section")

const $btnSubmit = document.getElementById("btn-submit")
const $btnCancel = document.getElementById("btn-cancel")

// estados globales 
// variables globales
let products = []
let isEditing = false
let idProductEditing = null

const traerProductos = async () => {
  // petición http con metodo GET
  // recuperar info
  const respuestaDelServidor = await fetch("http://localhost:50000/products", {
    method: "GET"
  })

  products = await respuestaDelServidor.json()
  console.log(products)

  $section.innerHTML = ""

  products.forEach((product) => {
    const { stock, _id, name, category, price, description } = product

    let textStock

    if (stock === 0) {
      textStock = "Sin stock"
    } else if (stock === 1) {
      textStock = `${stock} unidad`
    } else {
      textStock = `${stock} unidades`
    }

    $section.innerHTML += `
      <div style="filter: blur(${stock ? "0" : "3px"})">
        <small>${category}</small>
        <h3>${name}</h3>
        <p>ID: ${_id}</p>
        <h3>$${price} - ${stock ? "Stock:" : ""} ${textStock}</h3>
        <p>${description}</p>
        <button onclick="handleEditingProduct('${_id}')" >Actualizar</button>
        <button ${!stock && 'disabled'} onclick="deleteProduct('${_id}')">Borrar</button>
      </div>
    `
  })
}

traerProductos()

$form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (!isEditing) {
    addProduct()
  } else {
    const updates = {
      name: $name.value,
      price: Number($price.value),
      stock: Number($stock.value),
      category: $category.value,
      description: $description.value
    }

    updateProduct(updates)
  }
})

$btnCancel.addEventListener("click", () => {
  initializateStates()
})

const addProduct = async () => {
  const dataProduct = {
    name: $name.value,
    price: Number($price.value),
    stock: Number($stock.value),
    category: $category.value,
    description: $description.value
  }

  if (!$name.value || !$price.value || !$category.value || !$description.value) {
    alert("🚧 Debes completar el formulario 🚧")
    return
  }

  console.log(dataProduct)

  // method: POST ✅
  // url: /products ✅

  // ✅ avisar que tipo de dato le voy a enviar (json)
  // ⌚ enviarle la data en formato json

  const response = await fetch("http://localhost:50000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // te estoy mandando un json 😎
    },
    body: JSON.stringify(dataProduct)
  })

  // el servidor devuelve la data del objeto agregado en la db
  const createdProduct = await response.json()

  alert(`✅ Producto agregado con éxito id: ${createdProduct._id}`)

  traerProductos()
  $form.reset()
}

const deleteProduct = async (id) => {
  const confirmacion = confirm("¿Está seguro que quiere borrar el producto?")

  if (!confirmacion) {
    return
  }

  console.log(`http://localhost:50000/products/${id}`)

  try {
    // http://localhost:50000/products/694b33c41c2125b032792357
    const res = await fetch(`http://localhost:5   0000/products/${id}`, { method: "DELETE" })
    const product = await res.json()

    alert(
      `
      Se borro el producto ${product.name},
      ID: ${product._id}.
      `
    )
    traerProductos()
  } catch (error) {
    console.error("No se puede borrar el producto")
  }
}

const handleEditingProduct = (id) => {
  isEditing = true
  idProductEditing = id
  $btnCancel.style.display = "block"

  $btnSubmit.textContent = "Editar producto"
  const foundProduct = products.find(p => p._id === id)
  const { name, price, stock, category, description } = foundProduct

  $name.value = name
  $price.value = price
  $stock.value = stock
  $category.value = category
  $description.value = description
}

const updateProduct = async (updatedData) => {
  const res = await fetch(`http://localhost:50000/products/${idProductEditing}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json" // te estoy mandando un json 😎
      },
      body: JSON.stringify(updatedData)
    }
  )
  if (!res.ok) {
    alert("No se puede actualizar")
    return
  }

  const dataUpdatedProduct = await res.json()

  alert(`✅ Producto actualizado ID: ${dataUpdatedProduct._id}`)
  traerProductos()
  initializateStates()
}

const initializateStates = () => {
  $form.reset()
  $btnCancel.style.display = "none"
  $btnSubmit.textContent = "Agregar producto"
  idProductEditing = null
  isEditing = false
}