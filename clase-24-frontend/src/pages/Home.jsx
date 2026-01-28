import { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: ''
  })

  const fetchingProducts = async () => {
    try {
      const res = await fetch("http://localhost:50000/products", {
        method: "GET",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTcwMDNmOTI3OTA4NTI4YjUzYTkzNDgiLCJ1c2VybmFtZSI6Ik51ZXZvIHVzdWFyaW8iLCJlbWFpbCI6Im1hcmlhbm9AZ21haWwuY29tIiwiaWF0IjoxNzY5NTU4NDA3LCJleHAiOjE3Njk1OTQ0MDd9.g5oBSYPSntAFhs0XoeZnwgCXVI0R7N2hf5gYxmkrIg0"
        }
      })
      const json = await res.json()
      console.log(json)
      if (!json.success) {
        alert(json.error)
      }

      setProducts(json.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleToggleForm = () => {
    setShowForm((prev) => prev === true ? false : true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name } = formData

    if (!name) {
      alert("🚧 El nombre del producto debe ser obligatorio")
      return
    }

    const res = await fetch("http://localhost:50000/products", {
      method: "POST",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTcwMDNmOTI3OTA4NTI4YjUzYTkzNDgiLCJ1c2VybmFtZSI6Ik51ZXZvIHVzdWFyaW8iLCJlbWFpbCI6Im1hcmlhbm9AZ21haWwuY29tIiwiaWF0IjoxNzY5NTU4NDA3LCJleHAiOjE3Njk1OTQ0MDd9.g5oBSYPSntAFhs0XoeZnwgCXVI0R7N2hf5gYxmkrIg0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const json = await res.json()

    if (!json.success) {
      alert(json.error)
    }

    // opcion 1 -> llamar a todos mis productos de nuevo
    fetchingProducts()

    // opcion 2 -> agregar el producto nuevo al comienzo de mi lista de productos
    // const newProducto = json.data
    // setProducts([newProducto, ...products])
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDelete = (id) => {
    console.log(id, "<- id del producto a borrar")
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <nav>
          <ul>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="home-banner">
        <h2>Discover Our Exclusive Products</h2>
        <p>High quality, affordable prices, and fast delivery.</p>
      </section>

      {/* Product Catalog */}
      <main id="catalog">
        <div className="catalog-header">
          <h1>Product Catalog</h1>
          <button className="btn-add-product" onClick={handleToggleForm}>
            + Add New Product
          </button>
        </div>

        {/* Product Form */}
        {showForm && (
          <div className="form-overlay">
            <div className="product-form">
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product name"
                  />
                </div>

                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>

                <div className="form-group">
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    min="0"
                    placeholder="0"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Product description"
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Electronics, Clothing, etc."
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    {editingProduct ? 'Update Product' : 'Create Product'}
                  </button>
                  <button type="button" className="btn-cancel" onClick={handleToggleForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="product-list">
          {products.length === 0 && <p className="no-products">No hay productos disponibles.</p>}

          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h2>{product.name}</h2>
              <p className="product-price">${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p className="product-category">{product.category}</p>

              <div className="product-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEdit(product)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(product._id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2026 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;