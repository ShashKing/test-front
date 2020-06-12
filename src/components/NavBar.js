import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
function NavBar() {
    const logged_in =  JSON.parse(localStorage.getItem('logged_in'))
    return (
        <div>
             <nav>
                <div className="nav-wrapper" style={{background:"#6200ee"}}>
                    <a href="#" className="brand-logo">Rinnegan</a>
                    <ul id="nav-mobile" className="left">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/students">Enter New Student</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    <ul id="nav-mobile" className="right">
                        {logged_in === false? <li><NavLink to="/login">Login</NavLink></li>: <div>
                            
                            </div>}
                        
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar
