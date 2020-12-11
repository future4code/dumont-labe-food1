import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logofutureeats.png'

const LoginLogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
background-color: black;
`
const Img = styled.img`
width: 126px;
height: 65px;
object-fit: contain;
margin-top: 288px;
margin-right: 117px;
margin-bottom: 287px;
margin-left: 117px;
`

const LoginLogo = () => {
    return <LoginLogoContainer>
        <Img src={logo} />
    </LoginLogoContainer>
}
export default LoginLogo;