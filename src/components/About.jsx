import React, { Component } from 'react';

const About = () => {

    const careerStyles = { 
        listStyle: 'none',
        paddingTop: '50px'
    }

    return (
        <div style={{marginLeft:'400px'}}>
            <div style={{width: "95vw",paddingTop:'170px'}}>
            <table>
                <tr>
                    <td>Name</td>
                    <th>石川 太洋</th>
                </tr>
                <tr>
                    <td>University</td>
                    <th>東京理科大学　経営学部　経営学科</th>
                </tr>
                <tr>
                    <td>Birthday</td>
                    <th>1998/04/07</th>
                </tr>
            </table>
            <div style={careerStyles}>
                <li>2017/03　桐蔭学園中等教育学校卒業</li>
                <li>2018/04　東京理科大学　経営学部　経営学科　入学</li>
                <li>2018/05　PlayGround(学生コミュニティー)に入り、プログラミングを始める（RoR, HTML, CSS, JS）</li>
                <li>2018/10　reactJSを始める</li>
            </div>
        </div>
        </div>
    )
}

export default About