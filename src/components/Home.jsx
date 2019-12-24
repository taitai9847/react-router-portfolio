import React, { Component } from 'react';

const Home = () => {

    const fontStyle = {
        fontFamily: 'Georgia',
        fontSize: '50px'
    }

    return (
    <div style={{width: "95vw", textAlign:"center",paddingTop:'170px'}}>
        <p style={fontStyle}>Hello, I'm Taiyo Ishikawa.</p>
        <p style={{paddingTop: '20px'}}>I'm a student, b2. I'm in Tokyo University of Science, School of Manegement, </p>
        <p>DepartmentSchool of Manegement. I'm a Fronted Engineer. JavaScript, React.js. Now, I'm interested in Swift.</p>
    </div>
    )
}

export default Home