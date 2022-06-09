import React from 'react';
import './About.css'
import AboutMe from '../../assets/about-me2.jpg'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="about me" />
                    </div>
                </div>
                <div className='about__content'>
                    <p>
                        Hi there, I am Joy Roy. I am a Junior MERN Stack Developer and having a vast interest to work with technology and eagerness to know more made my way of learning smoother, hopefully it will continuously improve. I always want to learn by doing and get enough experience to be a senior Web Developer.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;