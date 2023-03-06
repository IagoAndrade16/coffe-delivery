import {
  Actions,
  Cart,
  Location,
  LocationCity,
  LocationIcon,
  Logo,
  NavBar,
} from './styles'
import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Header() {
  return (
    <nav>
      <NavBar>
        <NavLink to="/">
          <Logo>
            <img src="../../../assets/coffe-delivery-logo.svg" alt="" />
          </Logo>
        </NavLink>

        <Actions>
          <Location>
            <LocationIcon>
              <MapPin size={20} color="#4b2995" />
            </LocationIcon>

            <LocationCity>Porto Alegre, RJ</LocationCity>
          </Location>
          <NavLink to="/shopping-cart">
            <Cart>
              <ShoppingCartSimple size={24} weight="fill" color="#C47F17" />
            </Cart>
          </NavLink>
        </Actions>
      </NavBar>
    </nav>
  )
}
