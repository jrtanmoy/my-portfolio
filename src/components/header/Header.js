import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i'm</h5>
                <h1>Joy Roy</h1>
                <h5 className="text-light">MERN Stack Developer</h5>
            </div>
        </header>
    );
};

export default Header;