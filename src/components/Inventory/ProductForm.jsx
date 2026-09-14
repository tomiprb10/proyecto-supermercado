import React, { useState } from 'react';

export function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState({ name: '', code: '', category: 'Abarrotes', price: '', stock: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(form.price) <= 0 || Number(form.stock) <= 0) {
      alert("El precio y el stock deben ser mayores a 0.");
      return;
    }
    onAddProduct({ ...form, id: form.code, price: Number(form.price), stock: Number(form.stock) });
    setForm({ name: '', code: '', category: 'Abarrotes', price: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
      <h3>Registrar Nuevo Producto</h3>
      <input 
        type="text" 
        placeholder="Código" 
        value={form.code} 
        onChange={(e) => setForm({ ...form, code: e.target.value })} 
        required 
      />
      <input 
        type="text" 
        placeholder="Nombre Producto" 
        value={form.name} 
        onChange={(e) => setForm({ ...form, name: e.target.value })} 
        required 
      />
      <input 
        type="number" 
        placeholder="Precio ($)" 
        value={form.price} 
        onChange={(e) => setForm({ ...form, price: e.target.value })} 
        required 
      />
      <input 
        type="number" 
        placeholder="Cantidad Stock" 
        value={form.stock} 
        onChange={(e) => setForm({ ...form, stock: e.target.value })} 
        required 
      />
      <button type="submit">Guardar en Inventario</button>
    </form>
  );
}