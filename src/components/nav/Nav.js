import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Service</a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skills</a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
            <a href="#blogs" onClick={() => setActiveNav('#blogs')} className={activeNav === '#blogs' ? 'active' : ''}>Blogs</a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
        </nav>
    );
};

export default Nav;