import React from 'react';
import { MainCard, OrderDate, RestaurantName, Subtotal } from './styled';

const OrderHistoryCard = () => {
    return(
        <MainCard>
            <RestaurantName>Bullger Vila Madalena</RestaurantName>
            <OrderDate>23 Outubro 2019</OrderDate>
            <Subtotal>SUBTOTAL R$67,00</Subtotal>
        </MainCard>
    )
}

export default OrderHistoryCard