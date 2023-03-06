import { AdressForm } from './components/AdressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { CompleteOrder } from './styles'

export function ShoppingCart() {
  return (
    <CompleteOrder>
      <span>Complete seu pedido</span>
      <AdressForm />
      <PaymentMethod />
    </CompleteOrder>
  )
}
