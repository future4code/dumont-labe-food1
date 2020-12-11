import axios from 'axios';
import React from 'react';
import { MainCard, OrderDate, RestaurantName, Subtotal } from './styled';

const OrderHistoryCard = () => {

    const token = localStorage.getItem("token")

    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history', {
        headers: {
            auth: token
        }
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error.message)
    })

    return(
        <MainCard>
            <RestaurantName>Bullger Vila Madalena</RestaurantName>
            <OrderDate>23 Outubro 2019</OrderDate>
            <Subtotal>SUBTOTAL R$67,00</Subtotal>
        </MainCard>
    )
}

export default OrderHistoryCard