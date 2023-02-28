import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/shoppingCart'
import { SuccessOrder } from './pages/successOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/success-order" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
