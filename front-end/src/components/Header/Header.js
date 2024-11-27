import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import mylogo from "../../Images/Logo/white-logo.png"


const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
      setIsNavActive(!isNavActive);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src={mylogo} alt="Logo" /></Link>
                </div>

                <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleNav}>About</Link></li>
                    <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
                    <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
                </ul>
                <div className="social-icons">
                    <a href="https://github.com/vasilistheiou" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/vasileios-theiou-06383b23b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a>
                </div>
            
                <div className="hamburger" onClick={toggleNav}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>


        </header>
    );
};

export default Header;
