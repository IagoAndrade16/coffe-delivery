import { Trash } from 'phosphor-react'
import {
  AddOrSubtractActionContainer,
  AddOrSubtractButton,
  CoffeePrice,
  CoffeeSelectedActions,
  CoffeeSelectedContainer,
  CoffeeSelectedDetails,
  CoffeeSelectedDetailsTitle,
  CoffeeSelectedImage,
  CoffeeSelectedInfo,
  ConfirmOrderButton,
  RemoveCoffeeButton,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
  Separator,
  Total,
  TotalItemsContainer,
  TotalItemsPrice,
  TotalItemsText,
  TotalPriceContainer,
} from './style'

export function SelectedCoffees() {
  return (
    <div>
      <SelectedCoffeesTitle>Cafés Selecionados</SelectedCoffeesTitle>
      <SelectedCoffeesContainer>
        <CoffeeSelectedContainer>
          <CoffeeSelectedInfo>
            <CoffeeSelectedImage src="../../../../../../assets/coffee-image.svg" />

            <CoffeeSelectedDetails>
              <CoffeeSelectedDetailsTitle>
                Expresso Tradicional
              </CoffeeSelectedDetailsTitle>
              <CoffeeSelectedActions>
                <AddOrSubtractActionContainer>
                  <AddOrSubtractButton>-</AddOrSubtractButton>
                  <span>1</span>
                  <AddOrSubtractButton>+</AddOrSubtractButton>
                </AddOrSubtractActionContainer>

                <RemoveCoffeeButton>
                  <Trash size={24} color="#8047f8" />
                  <span>remover</span>
                </RemoveCoffeeButton>
              </CoffeeSelectedActions>
            </CoffeeSelectedDetails>
          </CoffeeSelectedInfo>

          <CoffeePrice>R$9,90</CoffeePrice>
        </CoffeeSelectedContainer>

        <Separator />

        <TotalPriceContainer>
          <TotalItemsContainer>
            <TotalItemsText>Total de itens</TotalItemsText>
            <TotalItemsPrice>R$29,70</TotalItemsPrice>
          </TotalItemsContainer>
        </TotalPriceContainer>

        <TotalPriceContainer>
          <TotalItemsContainer>
            <TotalItemsText>Entrega</TotalItemsText>
            <TotalItemsPrice>R$3,50</TotalItemsPrice>
          </TotalItemsContainer>
        </TotalPriceContainer>

        <Total>
          <span>Total</span>
          <span>R$33,20</span>
        </Total>

        <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
      </SelectedCoffeesContainer>
    </div>
  )
}
