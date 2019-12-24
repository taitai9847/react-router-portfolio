import React, { Component } from 'react';

const Contact = () => {

    const fontStyle = {
        fontFamily: 'Georgia',
        fontSize: '50px'
    }

    const mailStyle ={
        fontFamily: 'Georgia',
        fontSize: '25px',
        paddingTop: '50px'
    }

    return (
    <div style={{width: "95vw", textAlign:"center",paddingTop:'170px'}}>
        <p style={fontStyle}>Follow me!</p>
        <i class="fab fa-facebook-square fa-4x" style={{letterSpacing: '40px'}}></i>
        <i class="fab fa-twitter-square fa-4x"  style={{letterSpacing: '40px'}}></i>
        <i class="fab fa-github-square fa-4x"  style={{letterSpacing: '40px'}}></i>
        <p style={mailStyle}>email</p>
        <p style={{fontFamily: "Georgia"}}>taitai9847@gmail.com</p>
    </div>
    )
}

export default Contact