import React from 'react';
import './Projects.css';
import image1 from '../../assets/manufacturer-website.png';
import image2 from '../../assets/groxi-warehouse.png';
import image3 from '../../assets/independent-service.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work !</h5>
            <h2>Projects</h2>

            <div className="container projects__container">
                <article className='projects__item'>
                    <div className="projects__item-image">
                        <img src={image1} alt="project 1" />
                    </div>
                    <h3>Tools manufacturer's website</h3>
                    <div className="projects__item-btn">
                        <a href="https://github.com/jrtanmoy/-manufacturer-website-client-side" className='btn' target='_blank'>Client</a>
                        <a href="https://github.com/jrtanmoy/-manufacturer-website-server-side" className='btn' target='_blank'>Server</a>
                        <a href="https://manufacturer-website-114d0.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                    </div>
                </article>
                <article className='projects__item'>
                    <div className="projects__item-image">
                        <img src={image2} alt="project 2" />
                    </div>
                    <h3>Warehouse inventory management system website</h3>
                    <div className="projects__item-btn">
                        <a href="https://github.com/jrtanmoy/warehouse-management-clint-site" className='btn' target='_blank'>Client</a>
                        <a href="https://github.com/jrtanmoy/warehouse-management-server-site" className='btn' target='_blank'>Server</a>
                        <a href="https://groxi-warehouse.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                    </div>
                </article>
                <article className='projects__item'>
                    <div className="projects__item-image">
                        <img src={image3} alt="project 3" />
                    </div>
                    <h3>Independent service provider website</h3>
                    <div className="projects__item-btn">
                        <a href="https://github.com/jrtanmoy/independent-service-provider-website" className='btn' target='_blank'>Client-side</a>
                        <a href="https://independent-service-prov-3df5f.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;