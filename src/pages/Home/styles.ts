import styled from 'styled-components'

export const Intro = styled.div`
  /* Intro */

  position: absolute;
  height: 544px;
  left: 0px;
  right: 0px;
  top: 104px;
`

export const IntroTitle = styled.div`
  /* Title */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px / 2 - 266px);
  top: calc(50% - 192px / 2 - 82px);
`

export const IntroTitleMain = styled.div`
  width: 588px;
  height: 124px;

  /* Title/Title XL */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 130%;
  /* or 62px */

  /* Base/Title */

  color: #272221;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const IntroImage = styled.div`
  /* Imagem */

  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px / 2 + 322px);
  top: calc(50% - 360px / 2);

  /* background: url(); */
`

export const IntroTitleSubtitle = styled.div`
  width: 588px;
  height: 52px;

  /* Text/Regular L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const Items = styled.div`
  /* Items */
  flex-wrap: wrap;
  position: absolute;
  display: flex;
  width: 700px;
  height: 84px;
  left: calc(50% - 567px / 2 - 276.5px);
  top: calc(50% - 84px / 2 + 122px);
`

export const Item = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: relative;
  width: 231px;
  height: 32px;
  left: 0px;
  top: 0px;
  margin-right: 6rem;
  margin-bottom: 2rem;
`

export const ItemIcon = styled.div`
  /* Icon */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand / Yellow Dark */

  background: #c47f17;
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const ItemText = styled.div`
  width: 187px;
  height: 21px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
`

export const CoffeeList = styled.div`
  display: flex;
  position: absolute;
  height: 1645px;
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
  display: flex;
  position: absolute;
  width: 256px;
  height: 310px;
  left: 864px;
  top: 700px;

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
  padding: 0px;
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
`
