import React from 'react';
import './Header.css'
import HeaderButton from './HeaderButton';
import Me from '../../assets/joy (5).png'


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className='header__1st'>
                    <div>
                        <h5>Hello! I'm</h5>
                        <h1>Joy Roy</h1>
                        <h5 className="text-light">Junior React Developer</h5>
                        <HeaderButton></HeaderButton>
                    </div>
                </div>

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

            </div>
        </header>
    );
};

export default Header;