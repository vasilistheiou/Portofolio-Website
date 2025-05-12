import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import mylogo from "../../Images/Logo/white-logo.png"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
      setIsNavActive(!isNavActive);
    };

    return (
        // <header className="header">
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src={mylogo} alt="Logo" /></Link>
                </div>

                <ul className={`nav-links sidebar ${isNavActive ? 'active' : ''}`}>
                    <li><FontAwesomeIcon icon={faXmark} size="lg" style={{ color: 'red' }} onClick={toggleNav} /></li>
                    <li><NavLink to="/Portofolio-Website" onClick={toggleNav} activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleNav} activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/projects" onClick={toggleNav} activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/contact" onClick={toggleNav} activeClassName="active">Contact</NavLink></li>
                </ul>

                <ul className={"nav-links menu"}>
                    <li><NavLink to="/Portofolio-Website">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/projects" >Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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
