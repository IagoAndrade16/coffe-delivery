import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ConfirmedOrder,
  ConfirmedOrderSubtitle,
  Infos,
  InfoIcon,
  InfoText,
  OrderInfo,
  SuccessOrderImage,
} from './styles'

export function SuccessOrder() {
  return (
    <div>
      <ConfirmedOrder>Uhu! Pedido confirmado</ConfirmedOrder>
      <ConfirmedOrderSubtitle>
        Agora é só aguardar que logo o café chegará até você
      </ConfirmedOrderSubtitle>
      <OrderInfo>
        <Infos>
          <InfoIcon color="#8047f8">
            <MapPin size={24} weight="fill" color="#FFF" />
          </InfoIcon>
          <InfoText>
            <p>
              Entrega em <b> Avenida Retiro, 3201 </b> <br /> Retiro - Volta
              Redonda, RJ
            </p>
          </InfoText>
        </Infos>

        <Infos>
          <InfoIcon color="#DBAC2C">
            <Timer size={24} weight="fill" color="#FFF" />
          </InfoIcon>
          <InfoText>
            <p>
              Previsao de entrega
              <br />
              <b>20 - 30 minutos</b>
            </p>
          </InfoText>
        </Infos>

        <Infos>
          <InfoIcon color="#C47F17">
            <CurrencyDollar size={24} weight="fill" color="#FFF" />
          </InfoIcon>
          <InfoText>
            <p>
              Pagamento na entrega
              <br />
              <b>Cartão de crédito</b>
            </p>
          </InfoText>
        </Infos>
      </OrderInfo>

      <SuccessOrderImage src="../../assets/success-order-image.svg" />
    </div>
  )
}
