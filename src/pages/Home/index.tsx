import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { Coffees } from './components/Coffees/Coffees'
import {
  Intro,
  IntroImage,
  IntroTitle,
  IntroTitleMain,
  IntroTitleSubtitle,
  Item,
  ItemIcon,
  Items,
  ItemText,
} from './styles'

export function Home() {
  return (
    <div>
      <Intro>
        <IntroTitle>
          <IntroTitleMain>
            Encontre o café perfeito para qualquer hora do seu dia.
          </IntroTitleMain>
          <IntroTitleSubtitle>
            Com o Coffee Delivery você pode receber seu café onde estiver, a
            qualquer hora
          </IntroTitleSubtitle>
        </IntroTitle>

        <IntroImage>
          <img src="../../../assets/coffe-delivery-back.svg" alt="" />
        </IntroImage>

        <Items>
          <Item>
            <ItemIcon>
              <ShoppingCartSimple size={24} weight="fill" color="#FFF" />
            </ItemIcon>
            <ItemText>Compra simples e segura</ItemText>
          </Item>
          <Item>
            <ItemIcon>
              <Timer size={24} weight="fill" color="#FFF" />
            </ItemIcon>
            <ItemText>Entrega rápida e rastreada</ItemText>
          </Item>

          <Item>
            <ItemIcon>
              <Package size={24} weight="fill" color="#FFF" />
            </ItemIcon>
            <ItemText>Embalagem mantém o café intacto</ItemText>
          </Item>

          <Item>
            <ItemIcon background-color="#DBAC2C">
              <Coffee size={24} weight="fill" color="#FFF" />
            </ItemIcon>
            <ItemText>O café chega fresquinho até você</ItemText>
          </Item>
        </Items>
      </Intro>

      <Coffees />
    </div>
  )
}
