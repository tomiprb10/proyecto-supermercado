import { useMemo, useState } from 'react'
import Receipt from './Receipt'

const IVA_RATE = 0.19

function Cart({ products = [] }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    )
  }

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    [cart],
  )

  const iva = subtotal * IVA_RATE
  const total = subtotal + iva

  const formatCurrency = (value) =>
    `$${value.toLocaleString('es-CO')}`

  return (
    <section className="cart">
      <div className="product-list">
        <h2>Productos</h2>

        {products.map((product) => (
          <article className="product-item" key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <span>{formatCurrency(product.price)}</span>
            </div>

            <button type="button" onClick={() => addToCart(product)}>
              Agregar
            </button>
          </article>
        ))}
      </div>

      <div className="cart-items">
        <h2>Carrito de compra</h2>

        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>{formatCurrency(item.price)} por unidad</p>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>

              <strong>
                {formatCurrency(item.price * item.quantity)}
              </strong>
            </article>
          ))
        )}
      </div>

      <div className="cart-summary">
        <p>
          <span>Subtotal:</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </p>

        <p>
          <span>IVA (19%):</span>
          <strong>{formatCurrency(iva)}</strong>
        </p>

        <p className="cart-total">
          <span>Total:</span>
          <strong>{formatCurrency(total)}</strong>
        </p>
      </div>

      {cart.length > 0 && (
        <Receipt
          cart={cart}
          subtotal={subtotal}
          iva={iva}
          total={total}
        />
      )}
    </section>
  )
}

export default Cart