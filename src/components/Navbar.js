import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/retina-logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-floating-left">
                    <Link to='/' className="navbar-logo">
                        <img src={logo} alt="" className="navbar-icon" />
                    </Link>
                
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Creative Studio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Article
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="navbar-floating-right">
                        <li className={click ? 'nav-item-search' : 'nav-item-search-active'}>
                            <Link to='/' className="nav-links-search" onClick={closeMobileMenu}>
                                <BiSearchAlt />
                            </Link>
                        </li>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Navbar
