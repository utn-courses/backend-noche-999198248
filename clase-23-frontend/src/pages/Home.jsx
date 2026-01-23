import '../styles/Home.css'; // Assuming you will style this page

const products = [
  {
    name: 'Product 1',
    price: 100,
    stock: 10,
    description: 'This is a great product.',
    category: 'Category A',
  },
  {
    name: 'Product 2',
    price: 200,
    stock: 5,
    description: 'This is another great product.',
    category: 'Category B',
  },
  // Add more products as needed
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <nav>
          <ul>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
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
        <h1>Product Catalog</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h2>{product.name}</h2>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p>
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