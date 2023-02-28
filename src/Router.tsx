import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/shoppingCart'
import { SuccessOrder } from './pages/successOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/success-order" element={<SuccessOrder />} />
    </Routes>
  )
}
