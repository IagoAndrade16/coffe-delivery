import styled from 'styled-components'

export const SelectedCoffeesTitle = styled.span`
  position: absolute;
  width: 200px;
  height: 23px;
  left: 832px;
  /* top: 144px; */

  /* Title/Title XS */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  position: absolute;
  width: 448px;
  height: 498px;
  left: 832px;
  top: 70px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px 44px;
`

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 59px;

  width: 368px;
  height: 80px;

  /* Base/Card */

  background: #f3f2f2;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CoffeeSelectedInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;

  width: 255px;
  height: 64px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CoffeeSelectedImage = styled.img`
  width: 84px;
  height: 84px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CoffeeSelectedDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 61px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const CoffeeSelectedDetailsTitle = styled.span`
  width: 148px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;

  /* Base/Subtitle */

  color: #403937;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const CoffeeSelectedActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 171px;
  height: 32px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const AddOrSubtractActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 15px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const AddOrSubtractButton = styled.button`
  color: #8047f8;

  font-size: 1.4rem;
  cursor: pointer;

  border: none;
  background: inherit;
`

export const RemoveCoffeeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 32px;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;

  border: none;
`

export const CoffeePrice = styled.span`
  width: 55px;
  height: 21px;

  /* Text/Bold M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Separator = styled.div`
  width: 430px;
  height: 0px;

  /* Base/Button */

  border: 1px solid #e6e5e5;

  /* Inside auto layout */

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 368px;
  height: 30px;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`

export const TotalItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 368px;
  height: 21px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const TotalItemsText = styled.span`
  width: 84px;
  height: 18px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  /* display: flex; */
  align-items: center;
  /* text-align: right; */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const TotalItemsPrice = styled.span`
  width: 0px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const Total = styled.div`
  position: absolute;
  bottom: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 425px;
  height: 26px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  position: absolute;

  bottom: 150px;

  color: #fff;
  border: none;

  font-size: 0.875rem;
  font-weight: 700;

  width: 425px;
  height: 46px;

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`
