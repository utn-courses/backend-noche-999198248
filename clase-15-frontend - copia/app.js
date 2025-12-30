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

const products = []

const traerProductos = async () => {
  // petición http con metodo GET
  // recuperar info
  const respuestaDelServidor = await fetch("http://localhost:50000/products", {
    method: "GET"
  })

  const products = await respuestaDelServidor.json()
  console.log(products)

  $section.innerHTML = ""

  products.forEach((product) => {
    $section.innerHTML += `
      <div>
        <small>${product.category}</small>
        <h3>${product.name}</h3>
        <h3>$${product.price} - Stock: ${product.stock}</h3>
        <p>${product.description}</p>
        <button>Actualizar</button>
        <button>Borrar</button>
      </div>
    `
  })
}

traerProductos()

// controlar el evento

// definir la funcion controladora del submit
$form.addEventListener("submit", async (e) => {
  e.preventDefault()

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
})