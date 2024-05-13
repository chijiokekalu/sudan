import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo.jpeg';

function Header() {
    const toggleMenu = () => {
        setIsOpen(!isOpen);

        const mainContent = document.querySelector('.main-content');
        if (!isOpen) {
            mainContent.style.marginTop = '300px';
        } else {
            mainContent.style.marginTop = '0';
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <nav className={isOpen ? "nav open" : "nav"}>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/who-we-are" onClick={toggleMenu}>About Us</Link>
                            {dropdown && (
                                <div className="dropdown-content">
                                    <Link to="/who-we-are">Who We Are</Link>
                                    <Link to="/our-value">Our Core Values</Link>
                                    <Link to="/belief">Belief System</Link>
                                    <Link to="/story">Story</Link>
                                    <Link to="/team">Team</Link>
                                </div>
                            )}
                        </li>
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/our-work" onClick={toggleMenu}>Programs</Link>
                            {dropdown && (
                                <div className="dropdown-content">
                                    <Link to="/methodology">Methodology</Link>
                                    <Link to="/strategic-framework">Strategic Framework</Link>

                                </div>
                            )}
                        </li>
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/our-work" onClick={toggleMenu}>Resources</Link>
                            {dropdown && (
                                <div className="dropdown-content">
                                    <Link to="/impact">Our Impact</Link>
                                    <Link to="/news">News and Updates</Link>
                                    <Link to="/articles">Articles & Publications</Link>
                                </div>
                            )}
                        </li>
                        <li><Link to="/join-us" onClick={toggleMenu}>Galleries</Link></li>
                        {/* <li><Link to="/join-us" onClick={toggleMenu}>Contact Us</Link></li> */}
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to="/our-work" onClick={toggleMenu}>Take Action</Link>
                            {dropdown && (
                                <div className="dropdown-content">
                                    <Link to="/donate">Donate</Link>
                                    <Link to="/join-us">Join Us</Link>
                                    <Link to="/partners">Partner with Us</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
