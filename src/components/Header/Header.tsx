import {
  Actions,
  Cart,
  Location,
  LocationCity,
  LocationIcon,
  Logo,
  NavBar,
} from './styles'

import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Header() {
  return (
    <nav>
      <NavBar>
        <Logo>
          <img src="../../../assets/coffe-delivery-logo.svg" alt="" />
        </Logo>

        <Actions>
          <Location>
            <LocationIcon>
              <MapPin size={20} color="#4b2995" />
            </LocationIcon>

            <LocationCity>Porto Alegre, RJ</LocationCity>
          </Location>
          <Cart>
            <ShoppingCartSimple size={24} color="#C47F17" />
          </Cart>
        </Actions>
      </NavBar>
    </nav>
  )
}
