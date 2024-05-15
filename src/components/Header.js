import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdownName) => {
        setDropdown(dropdownName === dropdown ? null : dropdownName);
    };

    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <nav className={isOpen ? "nav open" : "nav"}>
                    <ul>
                        <li><Link to="/" className='header-link' onClick={toggleMenu}>Home</Link></li>
                        <li onClick={() => toggleDropdown('about')}>
                            <span className='header-link'> About Us</span>
                            {dropdown === 'about' && (
                                <div className="dropdown-content">
                                    <Link to="/who-we-are" onClick={toggleMenu}>Who We Are</Link>
                                    <Link to="/our-value" onClick={toggleMenu}>Our Core Values</Link>
                                    <Link to="/belief" onClick={toggleMenu}>Belief System</Link>
                                    <Link to="/story" onClick={toggleMenu}>Story</Link>
                                    <Link to="/team" onClick={toggleMenu}>Team</Link>
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('programs')}>
                            <span>Programs</span>
                            {dropdown === 'programs' && (
                                <div className="dropdown-content">
                                    <Link to="/programs" onClick={toggleMenu}>Programs</Link>
                                    <Link to="/methodology" onClick={toggleMenu}>Methodology</Link>
                                    <Link to="/strategic-framework" onClick={toggleMenu}>Strategic Framework</Link>
                                </div>
                            )}
                        </li>
                        <li onClick={() => toggleDropdown('resources')}>
                            <span>Resources</span>
                            {dropdown === 'resources' && (
                                <div className="dropdown-content">
                                    <Link to="/impact" onClick={toggleMenu}>Our Impact</Link>
                                    <Link to="/news" onClick={toggleMenu}>News and Updates</Link>
                                    <Link to="/articles" onClick={toggleMenu}>Articles & Publications</Link>
                                </div>
                            )}
                        </li>
                        <li><Link to="/media" className='header-link' onClick={toggleMenu}>Galleries</Link></li>
                        <li onClick={() => toggleDropdown('action')}>
                            <span>Take Action</span>
                            {dropdown === 'action' && (
                                <div className="dropdown-content">
                                    <Link to="/donate" onClick={toggleMenu}>Donate</Link>
                                    <Link to="/join-us" onClick={toggleMenu}>Join Us</Link>
                                    <Link to="/partners" onClick={toggleMenu}>Partner with Us</Link>
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
