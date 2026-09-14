import Cart from './components/Cart'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Arroz',
    price: 4500,
  },
  {
    id: 2,
    name: 'Leche',
    price: 3800,
  },
  {
    id: 3,
    name: 'Pan',
    price: 2500,
  },
  {
    id: 4,
    name: 'Huevos',
    price: 12000,
  },
  {
    id: 5,
    name: 'Aceite',
    price: 9500,
  },
]

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Supermercado</h1>
        <p>Sistema de ventas</p>
      </header>

      <Cart products={products} />
    </main>
  )
}

export default App
