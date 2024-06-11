// src/store.ts
import create from 'zustand';

interface Product {
  id: number;
  name: string;
  distributed: boolean;
}

interface FactoryState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  distributeProduct: (productId: number) => void;
}

const useStore = create<FactoryState>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId) => set((state) => ({ products: state.products.filter(product => product.id !== productId) })),
  distributeProduct: (productId) => set((state) => ({
    products: state.products.map(product => 
      product.id === productId ? { ...product, distributed: true } : product
    )
  })),
}));

export default useStore;
