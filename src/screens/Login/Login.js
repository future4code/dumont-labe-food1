import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

import logo from '../../assets/logofutureeatsinvert.png'

const LoginContainer = styled.div`
width: 360px;
height: 640px;
padding: 0 0 184px;
`
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;kk
`
const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Img = styled.img`
width: 104px;
height: 58px;
margin: 68px 128px 16px;
object-fit: contain;
`
const Text = styled.p`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #000000;
`
const Title = styled.div`
width: 360px;
height: 42px;
margin: 16px 0 0;
padding: 12px 32px;
`
const Input = styled.input`
width: 264px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #d0d0d0;
`
const Rectangle = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 328px;
height: 56px;
margin-right: 16px;
margin-left: 16px;
padding: 19px 48px 19px 16px;
border-radius: 2px;
border: solid 1px var(--greyish);
border: 1px solid black;
`
const RectangleButtonDiv = styled.div`
width: 360px;
height: 42px;
margin: 8px 0 16px;
padding: 0 16px;
`
const RectangleButton = styled.div`
width: 328px;
height: 42px;
padding: 12px 16px;
border-radius: 2px;
background-color: #5cb646;
margin-left: 16px;
margin-right: 16px;
`
const Button = styled.div`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #000000;
`
const SubscribeDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 360px;
height: 42px;
margin: 16px 0 0;
padding: 12px 32px;
`
const SignupText = styled.div`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #000000;
`


const Login = () => {
  const {form, onChange} =useForm({email: "", password: ""})

  const handleInputChange = (event) => {
    const {value, name} = event.target

    console.log(form)

    onChange(value, name)
  }
  return (
  <LoginContainer>
      <Header> 
        <Img src={logo} />
      </Header>
      <Body>
        <Title>
          <Text>Entrar</Text>
        </Title>
        <Rectangle>
          <Input 
            placeholder="E-mail*"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </Rectangle>
        <Rectangle>
          <Input 
            placeholder="Senha*"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          
          />
        </Rectangle>
        <RectangleButtonDiv>
          <RectangleButton>
            <Button>Entrar</Button>
          </RectangleButton>
        </RectangleButtonDiv>
        <SubscribeDiv>
          <SignupText>Não possui cadastro? Clique aqui.</SignupText>
        </SubscribeDiv>
      </Body>
  </LoginContainer>
  )
}
export default Login;