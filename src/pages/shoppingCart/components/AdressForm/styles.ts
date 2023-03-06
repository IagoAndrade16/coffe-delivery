import React from 'react'
import styled from 'styled-components'

interface AddressFormProps {
  children: React.ReactNode
}

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 640px;
  height: 591px;
  top: 70px;
`

export const AdressFormInputs = styled.div<AddressFormProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 300px;

  /* Base/Card */

  background: #f3f2f2;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const AdressFormTitle = styled.div`
  display: block;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 560px;
  height: 44px;
`

export const AddressFormSubtitle = styled.div`
  width: 400px;
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

  /* Base/Text */

  color: #574f4d;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 560px;
  height: 216px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  width: ${(props) => props.width};
  margin-bottom: 1rem;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;
`

export const NumberAndComplement = styled.div`
  display: flex;
  gap: 8px;
`

export const DistrictCityUF = styled.div`
  display: flex;
  gap: 8px;
`
