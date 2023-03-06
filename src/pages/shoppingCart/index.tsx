import { AdressForm } from './components/AdressForm'
import { CompleteOrder } from './styles'

export function ShoppingCart() {
  return (
    <CompleteOrder>
      <span>Complete seu pedido</span>
      <AdressForm></AdressForm>
    </CompleteOrder>
  )
}
