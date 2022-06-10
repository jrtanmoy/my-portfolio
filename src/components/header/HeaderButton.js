import React from 'react';
import resume from '../../assets/Roy-Resume.pdf'

const HeaderButton = () => {
    return (
        <div className='header__button'>
            <a href={resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            
        </div>
    );
};

export default HeaderButton;