import React from 'react';
import './MobileNav.css';
import logo from '../../../Assets/navlogo.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className='mobile-menu-container'>
                    <img className='logo' src={logo} alt="logo" />
                    <ul>
                        <li>
                            <a className='menu-item' onClick={toggleMenu}>Home</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={toggleMenu}>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={toggleMenu}>Work Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={toggleMenu}>Contact</a>
                        </li>
                        <button className='contact-btn' onClick={toggleMenu}> Hire Me </button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
