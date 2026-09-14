import { useState } from 'react';
import { initialProducts } from './data/InitialProducts';
import { ProductForm } from './components/Inventory/ProductForm';
import { ProductList } from './components/Inventory/ProductList';
import Cart from './components/Cart';

export function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Proyecto Supermercado</h1>
      
      {/* Tu módulo */}
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />

      <hr style={{ margin: '2rem 0' }} />

      {/* Módulo de tu compañero */}
      <Cart products={products} />
    </main>
  );
}