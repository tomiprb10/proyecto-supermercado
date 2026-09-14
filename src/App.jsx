import { useState } from 'react';
import './App.css'; // 👈 1. IMPORTANTE: Carga los estilos que definiste
import { initialProducts } from './data/InitialProducts';

// Importación de componentes
import ProductForm from './components/Inventory/ProductForm';
import ProductList from './components/Inventory/ProductList';
import Cart from './components/Cart';

export function App() {
  const [products, setProducts] = useState(initialProducts || []);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="app">
      {/* Cabecera con los estilos de app-header de tu CSS */}
      <header className="app-header">
        <div>
          <h1>Proyecto Supermercado</h1>
          <p>Módulo de Inventario y Punto de Venta (POS)</p>
        </div>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Módulo 1: Gestión de Inventario */}
        <section className="inventory-section">
          <ProductForm onAddProduct={handleAddProduct} />
          <ProductList products={products} />
        </section>

        <hr style={{ border: '0', borderTop: '1px solid #e7ebf0', margin: '10px 0' }} />

        {/* Módulo 2: Punto de Venta / Carrito */}
        <Cart products={products} />
      </main>
    </div>
  );
}

export default App;