import React from 'react';
import { ProfileContainer, Bar, Tittle, Text, Name, Email, Cpf, EditIcon, AddressContainer, AddressTittle, Address, OrderHistoryTittle, OrderCard, PathCopy } from './styles'
import edit from '../../assets/edit (1).svg'
import OrderHistoryCard from '../../components/OrderHistoryCard/OrderHistoryCard';

const Profile = () => {
  return (
    <ProfileContainer>
      <Bar>
        <Tittle>
          <Text>Meu Perfil</Text>
        </Tittle>
      </Bar>
      <EditIcon src={edit}/>
      <Name>Homer Simpson</Name>
      <Email>homer@simpson.com</Email>
      <Cpf>333.333.333-33</Cpf>
      <AddressContainer>
        <EditIcon src={edit}/>  
        <AddressTittle>Endereço cadastrado</AddressTittle>
        <Address>Rua Evergreen Terrace, 632 - Springfield</Address>
      </AddressContainer>
      <OrderHistoryTittle>Histórico de Pedidos</OrderHistoryTittle>
      <PathCopy/>
      <OrderCard>
        <OrderHistoryCard/>
        <OrderHistoryCard/>
        <OrderHistoryCard/>
      </OrderCard>
    </ProfileContainer>
  )
}

export default Profile;