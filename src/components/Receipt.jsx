function Receipt({ cart, subtotal, iva, total }) {
  const formatCurrency = (value) =>
    `$${value.toLocaleString('es-CO')}`

  return (
    <section className="receipt">
      <h2>Comprobante de compra</h2>

      <div className="receipt-items">
        {cart.map((item) => (
          <div className="receipt-item" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>

            <strong>
              {formatCurrency(item.price * item.quantity)}
            </strong>
          </div>
        ))}
      </div>

      <div className="receipt-summary">
        <p>
          <span>Subtotal:</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </p>

        <p>
          <span>IVA (19%):</span>
          <strong>{formatCurrency(iva)}</strong>
        </p>

        <p className="receipt-total">
          <span>Total:</span>
          <strong>{formatCurrency(total)}</strong>
        </p>
      </div>

      <p className="receipt-thanks">
        ¡Gracias por su compra!
      </p>
    </section>
  )
}

export default Receipt
