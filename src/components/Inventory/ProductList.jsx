import React from 'react';

export function ProductList({ products }) {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h3>Inventario Actual</h3>
      <table width="100%" border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price.toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>
                {p.stock <= 5 ? (
                  <span style={{ color: 'red', fontWeight: 'bold' }}>⚠️ Stock Bajo</span>
                ) : (
                  <span style={{ color: 'green' }}>✅ Ok</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}