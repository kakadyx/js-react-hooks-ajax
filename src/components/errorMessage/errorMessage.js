import React from 'react'
import './errorMessage.css';
import img from './error.jpg.png'
const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt='img'></img>
        <span>Something went wrong...</span>
        </>
    )
}

export default ErrorMessage