import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'

// const home = () => <div>home</div>
// const about = () => <div>about</div>
// const work = () => <div>work</div>
// const contact = () => <div>contact</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>



const Menu = () => {
    const liStyle = {
        display: 'inline-block',
        fontSize: '25px',
        padding: '30px 40px',
    } 

    const linkColor = {
        textDecoration: 'none',
        color:'black',
        fontFamily: 'Georgia',
    }

    return (
        <Router>
            <div style={{width: '100vw'}}>
                <ul style={{textAlign:'center', fontSize:'0', paddingLeft: "0"}}>
                    <li style={liStyle}><Link to ='/' style={linkColor}>home</Link></li>
                    <li style={liStyle}><Link to ='/about' style={linkColor}>about</Link></li>
                    <li style={liStyle}><Link to ='/work' style={linkColor}>work</Link></li>
                    <li style={liStyle}><Link to ='/contact' style={linkColor}>contact</Link></li>
                </ul>
                <div style={{marginLeft: '50px'}}>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/work' exact component={Work}/>
                        <Route path='/contact' exact component={Contact}/>
                        <Route exact component={page404}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
        
    )
}

export default Menu