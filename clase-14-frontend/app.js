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

const traerProductos = async () => {
  const respuestaDelServidor = await fetch("http://localhost:50000/products")
  const products = await respuestaDelServidor.json()

  products.forEach((product) => {
    $section.innerHTML += `<h3>${product.name}</h3>`
  })
}

traerProductos()

// controlar el evento

// definir la funcion controladora del submit
$form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const dataProduct = {
    name: $name.value,
    price: $price.value,
    stock: $stock.value,
    category: $category.value,
    description: $description.value
  }

  // envair el obj al backend
  console.log(dataProduct)

  // method: POST
  // url: /products

  // ✅ avisar que tipo de dato le voy a enviar (json)
  // ⌚ enviarle la data en formato json

  const response = await fetch("http://localhost:50000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataProduct)
  })

  const data = await response.json()

  console.log(data)

  $name.value = ""
  $price.value = ""
  $stock.value = ""
  $category.value = ""
  $description.value = ""
})