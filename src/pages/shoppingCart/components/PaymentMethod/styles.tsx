import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  position: absolute;
  top: 470px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 150px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const PaymentMethodTitle = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentMethodSubtitle = styled.div`
  width: 530px;
  height: 21px;

  /* Text/Regular S */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  display: flex;
  align-items: center;
  position: absolute;
  top: 75px;

  /* Base/Text */

  color: #574f4d;
`

export const PaymentMethodCardsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const PaymentMethodCard = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  margin-top: 2rem;

  width: 178.67px;
  height: 51px;
  border: none;

  justify-content: center;

  /* Base/Button */

  background: #e6e5e5;
  border-radius: 6px;
  /* cursor: pointer; */

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;

  :focus {
    border: 1px solid #8047f8;
  }
`
