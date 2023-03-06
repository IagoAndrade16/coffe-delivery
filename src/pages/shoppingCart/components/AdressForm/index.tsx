import { MapPin } from 'phosphor-react'
import {
  AddressFormSubtitle,
  AdressContainer,
  AdressFormInputs,
  AdressFormTitle,
  ContainerInputs,
  DistrictCityUF,
  Input,
  NumberAndComplement,
} from './styles'

export function AdressForm() {
  return (
    <AdressContainer>
      <AdressFormInputs>
        <AdressFormTitle>
          <div>
            Endereço de entrega
            <MapPin size={20} color="#C47F17" />
          </div>
          <div>
            <AddressFormSubtitle>
              Informe o endereço onde deseja receber o pedido
            </AddressFormSubtitle>
          </div>
        </AdressFormTitle>
        <ContainerInputs>
          <form action="">
            <Input placeholder="CEP" width="200px"></Input>
            <Input placeholder="Rua" width="600px"></Input>
            <NumberAndComplement>
              <Input placeholder="Número" width="200px"></Input>
              <Input placeholder="Complemento(opcional)" width="365px"></Input>
            </NumberAndComplement>

            <DistrictCityUF>
              <Input placeholder="Bairro" width="200px"></Input>
              <Input placeholder="Cidade" width="276px"></Input>
              <Input placeholder="Bairro" width="60px"></Input>
            </DistrictCityUF>
          </form>
        </ContainerInputs>
      </AdressFormInputs>
    </AdressContainer>
  )
}
