import React from 'react';
import './Services.css';
import html from '../../assets/html-css (1).png';
import react from '../../assets/react-3 (1).png';
import mern from '../../assets/mern.png';

const Services = () => {
    return (
        <section id='services' className='container services'>
            <h5>Services</h5>
            <h2>What I Do</h2>

            <div className='services_container'>
                <div className='services_card'>
                    <div>
                        <img src={html} alt="" />
                    </div>
                    <div className='card__content'>
                        <h2>Plain HTML & CSS website</h2>
                        <article>
                            <p>
                            I can develop pixel perfect fully resposive websites with HTML and CSS from provided figma degine.
                            </p>
                        </article>
                    </div>
                </div>
                <div className='services_card' >
                    <div>
                        <img src={react} alt="" />
                    </div>
                    <div className='card__content'>
                        <h2>SPA with React</h2>
                        <article>
                            <p>
                               I can develop fast and fully resposive single page react web apps with routing(protected & nested), authentication.
                            </p>
                        </article>
                    </div>
                </div>
                <div className='services_card'>
                    <div>
                        <img src={mern} alt="" />
                    </div>
                    <div className='card__content'>
                        <h2>MERN Stack Development</h2>
                        <article>
                            <p>
                                I can develop full stack web apps using MongoDB, Express, React & Node with authorization features like JWT, admin role, Payment system etc.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;