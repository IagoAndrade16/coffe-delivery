import styled from 'styled-components'

export const CoffeeList = styled.div`
  display: flex;
  position: absolute;

  left: 0px;
  right: 0px;
  top: 648px;
`

export const CoffeeListTitle = styled.div`
  position: absolute;
  width: 250px;
  height: 42px;
  left: calc(50% - 193px / 2 - 463.5px);
  top: 32px;

  /* Title/Title L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const CoffeCard = styled.div`
  position: absolute;
  width: 280px;
  height: 310px;
  left: 391px;
  top: 170px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px 36px;
`

export const CoffeCardBuy = styled.div`
  /* Buy */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  position: absolute;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;
`

export const CoffeCardBuyText = styled.div`
  width: 67px;
  height: 31px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;
  /* or 18px */

  text-align: right;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CoffeCardBuyActions = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 118px;
  height: 38px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CoffeCardBuyActionsCounter = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 24px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  button {
    border: none;
    background: inherit;
    color: #4b2995;
    font-size: 2rem;
    cursor: pointer;
  }
`

export const CoffeCardBuyActionBuyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 24px;
  height: 25px;

  /* Brand/Purple Dark */

  background: #4b2995;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  button {
    border: none;
    background: inherit;
  }
`

export const CoffeCardDescription = styled.div`
  position: absolute;
  height: 36px;
  left: 20px;
  right: 20px;
  top: 183px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-align: center;

  /* Base/Label */

  color: #8d8686;
`

export const CoffeeCardName = styled.div`
  position: absolute;
  height: 26px;
  left: 47px;
  right: 20px;
  top: 149px;

  /* Title/Title S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: flex-end;
  text-align: center;

  /* Base/Subtitle */

  color: #403937;
`
export const CoffeeCardTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 81px;
  height: 21px;
  left: calc(50% - 81px / 2);
  top: 112px;
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  font-family: 'Roboto';
  font-size: 0.875rem;
  color: rgb(196, 127, 23);

  width: 81px;
  height: 21px;

  /* Brand/Yellow Light */

  background: #f1e9c9;
  border-radius: 100px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
export const CoffeImage = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  left: calc(50% - 125px / 2);
  top: -40px;
`
