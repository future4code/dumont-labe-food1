import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useRequestData(url) {
    
    useEffect(() => {
        axios
        .post(url)
        .then((response) => {
        localStorage.setItem('token',response.data.token)
        })
    }, [url])
}