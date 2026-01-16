import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="nav-logo">DIT Student Market</h1>
      </nav>

      <header className="hero-section">
        <h1 className="main-title">Artificial Intelligence <br/> Powered Marketplace</h1>
        <p className="sub-title">Connecting DIT University students with premium tech gear.</p>
      </header>

      <main className="product-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-inner">
              <h3>{product.name}</h3>
              <div className="rating">
                {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              </div>
              <p className="price">₹{product.price}</p>
              <button className="neon-button">View Details</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;