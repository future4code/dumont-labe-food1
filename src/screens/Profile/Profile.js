import React, { useEffect, useState } from 'react';
import { ProfileContainer, Bar, Tittle, Text, Name, Email, Cpf, EditIcon, AddressContainer, AddressTittle, Address, OrderHistoryTittle, OrderCard, PathCopy, ProfileInfoContainer } from './styles'
import edit from '../../assets/edit (1).svg'
import OrderHistoryCard from '../../components/OrderHistoryCard/OrderHistoryCard';
import axios from 'axios';

const Profile = () => {

  const [profile, setProfile] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")

    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', {
      headers: {
        Authorization: token 
      }
    }).then((response) => {
      setProfile(response.data)
    }).catch((error) => {
      console.log(error.message)
    })

  }, [])

  return (
    <ProfileContainer>
      <Bar>
        <Tittle>
          <Text>Meu Perfil</Text>
        </Tittle>
      </Bar>
      <ProfileInfoContainer>
        <EditIcon src={edit} />
        <Name>Homer Simpson</Name>
        <Email>homer@simpson.com</Email>
        <Cpf>333.333.333-33</Cpf>
        {/* DADOS VINDOS DA API COMENTADOS POIS NÃO TENHO ACESSO AO TOKEN */}
        {/* <Name>{profile.user.name}</Name>
        <Email>{profile.user.email}</Email>
        <Cpf>{profile.user.cpf}</Cpf> */}
      </ProfileInfoContainer>
      <AddressContainer>
        <EditIcon src={edit} />
        <AddressTittle>Endereço cadastrado</AddressTittle>
        <Address>Rua Evergreen Terrace, 632 - Springfield</Address>
        {/* <Address>{profile.user.address}</Address> */}
      </AddressContainer>
      <OrderHistoryTittle>Histórico de Pedidos</OrderHistoryTittle>
      <PathCopy />
      <OrderCard>
        <OrderHistoryCard />
        <OrderHistoryCard />
        <OrderHistoryCard />
      </OrderCard>
    </ProfileContainer>
  )
}

export default Profile;