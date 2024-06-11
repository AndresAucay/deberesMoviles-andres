// src/components/ProductList.tsx
import React from 'react';
import useStore from '../store';

const ProductList: React.FC = () => {
  const products = useStore((state) => state.products);
  const removeProduct = useStore((state) => state.removeProduct);
  const distributeProduct = useStore((state) => state.distributeProduct);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.distributed ? 'Distributed' : 'Not Distributed'}
            <button onClick={() => distributeProduct(product.id)}>Distribute</button>
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
