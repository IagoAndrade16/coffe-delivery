import { AdressForm } from './components/AdressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrder } from './styles'

export function ShoppingCart() {
  return (
    <CompleteOrder>
      <span>Complete seu pedido</span>
      <AdressForm />
      <PaymentMethod />
      <SelectedCoffees />
    </CompleteOrder>
  )
}
