import styled from 'styled-components'

export const NavBar = styled.nav`
  /* Navbar */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;

  position: absolute;
  height: 20px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Base/Background */

  background: #fafafa;
`

export const Logo = styled.div`
  /* Logo */

  width: 84.95px;
  height: 40px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
export const Actions = styled.div`
  /* Actions */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 193px;
  height: 38px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Location = styled.div`
  /* Location */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;

  /* Brand/Purple Light */

  background: #ebe5f9;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const LocationIcon = styled.div`
  /* Icon */

  width: 22px;
  height: 22px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const LocationCity = styled.span`
  /* City */

  width: 101px;
  height: 18px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  /* Brand/Purple Dark */

  color: #4b2995;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Cart = styled.div`
  /* Cart */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  /* Brand/Yellow Light */

  background: #f1e9c9;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`
