import styled from 'styled-components'

export const ConfirmedOrder = styled.span`
  position: absolute;
  width: 353px;
  height: 42px;
  left: calc(50% - 353px / 2 - 383.5px);
  top: 184px;

  /* Title/Title L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  /* Brand / Yellow Dark */

  color: #c47f17;
`

export const ConfirmedOrderSubtitle = styled.span`
  position: absolute;
  width: 552px;
  height: 26px;
  left: calc(50% - 552px / 2 - 284px);
  top: 230px;

  /* Text/Regular L */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  /* Base/Subtitle */

  color: #403937;
  font-stretch: 100;
`

export const OrderInfo = styled.div`
  /* Auto layout */
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  position: absolute;
  width: 526px;
  height: 270px;
  left: calc(50% - 526px / 2 - 297px);
  top: 296px;

  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) 1;
  border-radius: 6px 36px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 354px;
  height: 42px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const InfoIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 32px;
  height: 32px;

  /* Brand/Purple */

  background: ${(props) => props.color};
  border-radius: 1000px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const InfoText = styled.div`
  width: 310px;
  height: 42px;

  /* Text/Regular M */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 2rem;
  /* or 21px */

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

export const SuccessOrderImage = styled.img`
  position: absolute;
  width: 492px;
  height: 293px;
  left: calc(50% - 492px / 2 + 314px);
  top: 284px;
`
