import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeCard,
  CoffeCardBuy,
  CoffeCardBuyActionBuyButton,
  CoffeCardBuyActions,
  CoffeCardBuyActionsCounter,
  CoffeCardBuyText,
  CoffeCardDescription,
  CoffeeCardName,
  CoffeeCardTags,
  CoffeeList,
  CoffeeListTitle,
  CoffeImage,
  Tag,
} from './styles'

export function Coffees() {
  return (
    <CoffeeList>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeCard>
        <CoffeImage>
          <img
            src="../../../../../../assets/coffee-image.svg"
            alt="Imagem do café "
          />
        </CoffeImage>
        <CoffeeCardName>Expresso Tradicional</CoffeeCardName>
        <CoffeeCardTags>
          <Tag>Tradicional</Tag>
        </CoffeeCardTags>
        <CoffeCardDescription>
          O tradicional café feito com água quente e grãos moídos
        </CoffeCardDescription>
        <CoffeCardBuy>
          <CoffeCardBuyText>R$9,90</CoffeCardBuyText>
          <CoffeCardBuyActions>
            <CoffeCardBuyActionsCounter>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </CoffeCardBuyActionsCounter>
            <CoffeCardBuyActionBuyButton>
              <button>
                <ShoppingCartSimple size={24} weight="fill" color="#FFF" />
              </button>
            </CoffeCardBuyActionBuyButton>
          </CoffeCardBuyActions>
        </CoffeCardBuy>
      </CoffeCard>
    </CoffeeList>
  )
}
