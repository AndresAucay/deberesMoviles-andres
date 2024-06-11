// src/components/AddProductForm.tsx
import React, { useState } from 'react';
import useStore from '../store';

const AddProductForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const addProduct = useStore((state) => state.addProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productName,
      distributed: false,
    };
    addProduct(newProduct);
    setProductName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
        placeholder="Product Name" 
        required 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
