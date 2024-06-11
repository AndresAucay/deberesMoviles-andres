// src/App.tsx
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Factory Management</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default App;
