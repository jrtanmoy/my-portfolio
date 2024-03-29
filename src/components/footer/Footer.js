import React from 'react';
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Joy</a>

            <ul className='sectionlinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
            <a href="https://www.linkedin.com/in/joy-roy-697907229/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/jrtanmoy" target="_blank"><FaGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; Joy Roy. All rights reserved. 
                </small>
            </div>
        </footer>
    );
};

export default Footer;