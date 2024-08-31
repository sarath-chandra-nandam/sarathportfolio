import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assets/navlogo.png';
import MobileNav from './MobileNav/MobileNav';
import Resume from '../../Assets/Resume.pdf'

const Navbar = ({ heroRef, skillsRef, workExperienceRef, contactMeRef }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className="nav-content">
                    <img className='logo' src={logo} alt='Logo' />
                    <ul>
                        <li>
                            <a className='menu-item' onClick={() => scrollToSection(heroRef)}>Home</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={() => scrollToSection(skillsRef)}>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={() => scrollToSection(workExperienceRef)}>Work Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' onClick={() => scrollToSection(contactMeRef)}>Contact</a>
                        </li>
                        <li>
                            {/* Anchor tag with download attribute */}
                            <a href={Resume}download className='contact-btn'style={{textDecoration:'none'}} >
                                Download CV
                            </a>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "x" : "="}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
