import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentMethodCard,
  PaymentMethodCardsContainer,
  PaymentMethodContainer,
  PaymentMethodSubtitle,
  PaymentMethodTitle,
} from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentMethodTitle>
        <CurrencyDollar size={20} weight="fill" color="#8047F8" />
        Pagamento
      </PaymentMethodTitle>
      <PaymentMethodSubtitle>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </PaymentMethodSubtitle>
      <PaymentMethodCardsContainer>
        <PaymentMethodCard>
          <CreditCard size={20} color="#8047F8" />
          Cartão de crédito
        </PaymentMethodCard>

        <PaymentMethodCard>
          <Bank size={20} color="#8047F8" />
          Cartão de débito
        </PaymentMethodCard>

        <PaymentMethodCard>
          <Money size={20} color="#8047F8" />
          Dinheiro
        </PaymentMethodCard>
      </PaymentMethodCardsContainer>
    </PaymentMethodContainer>
  )
}
