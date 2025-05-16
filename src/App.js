import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <ProductCard
        image="https://via.placeholder.com/300x200"
        title="Holiday Chocolate Box"
        price="19.99"
      />
    </div>
  );
}

export default App;
