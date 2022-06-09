import React from 'react';
import './Header.css'
import HeaderButton from './HeaderButton';
import Me from '../../assets/joy.jpg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i'm</h5>
                <h1>Joy Roy</h1>
                <h5 className="text-light">MERN Stack Developer</h5>
                <HeaderButton></HeaderButton>
                <HeaderSocial></HeaderSocial>

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;