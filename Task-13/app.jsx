import './App.css';

function App() {
  const products = [
    {
      name: "Headphones",
      description: "High-quality wireless headphones with clear sound.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },
    {
      name: "Smart Watch",
      description: "A stylish smartwatch with fitness tracking features.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600"
    },
    {
      name: "Camera",
      description: "Capture beautiful moments with this digital camera.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
    }
  ];

  return (
    <div className="products-section">

      <h1>Our Products</h1>

      <div className="products-container">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <p>{product.description}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
