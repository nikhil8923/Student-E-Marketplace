import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Port 5000 is your Backend
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Data fetch error:", err));
  }, []);

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#eef2f3', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#2c3e50' }}>DIT Student Market - Live Now</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {products.length > 0 ? (
          products.map(p => (
            <div key={p.id} style={{ background: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
              <h2>{p.name}</h2>
              <p style={{ color: 'green', fontSize: '20px' }}>Price: ₹{p.price}</p>
            </div>
          ))
        ) : (
          <h3>Connecting to MySQL... Make sure Backend Port 5000 is ON</h3>
        )}
      </div>
    </div>
  );
}

export default App;