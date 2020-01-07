import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import About from '../dashboard/About';

class Navbar extends Component {
    render() {
        return (
           <div className="header">
           <nav className="nav-wrapper">
           <Link to='/' className="logo left">Ayomide Bajo</Link>
                    

                    <ul className="link">
                        <li><NavLink to='/about' className="text">About me</NavLink></li>
                        <li><NavLink to='/portfolio' className="text" activeClassName="active" >Portfolio</NavLink></li>
                        <li><NavLink to='/contact' className="text" >Contact</NavLink></li>
                        <li><NavLink to='/blog' className="text">Blog</NavLink></li>
                    </ul>
                   
                </nav>
                <About />
           </div>
        )
    }
}

export default Navbar
