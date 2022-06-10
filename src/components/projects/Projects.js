import React from 'react';
import './Projects.css';
import screencapture11 from '../../assets/screencapture-1-1.png';
import screencapture12 from '../../assets/screencapture-1-2.png';
import screencapture13 from '../../assets/screencapture-1-3.png';
import screencapture14 from '../../assets/screencapture-1-4.png';
import screencapture15 from '../../assets/screencapture-1-5.png';
import screencapture16 from '../../assets/screencapture-1-6.png';
import screencapture21 from '../../assets/screencapture-2-1.png';
import screencapture22 from '../../assets/screencapture-2-2.png';
import screencapture23 from '../../assets/screencapture-2-3.png';
import screencapture24 from '../../assets/screencapture-2-4.png';
import screencapture25 from '../../assets/screencapture-2-5.png';
import screencapture26 from '../../assets/screencapture-2-6.png';
import screencapture31 from '../../assets/screencapture-3-1.png';
import screencapture32 from '../../assets/screencapture-3-2.png';
import screencapture33 from '../../assets/screencapture-3-3.png';
import screencapture34 from '../../assets/screencapture-3-4.png';
import {AiFillCheckCircle} from 'react-icons/ai'




// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Projects = () => {
    return (
        <section id='projects'>
            <h5>My Recent Work !</h5>
            <h2>Projects</h2>

            <div className="container projects__container">
                <article className='projects__item'>
                    <div className='projects__item-image'>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={40}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}


                        >
                            <SwiperSlide>
                                <img src={screencapture11} alt="project 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture12} alt="project 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture13} alt="project 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture14} alt="project 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture15} alt="project 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture16} alt="project 1" />
                            </SwiperSlide>


                        </Swiper>
                    </div>

                    <div className='projects__item-features'>
                        <h3>Tools manufacturer's website</h3>
                        <div>
                            <h3>Overview</h3>
                        </div>
                        <div className="projects__item-btn">
                            <a href="https://github.com/jrtanmoy/-manufacturer-website-client-side" className='btn' target='_blank'>Client</a>
                            <a href="https://github.com/jrtanmoy/-manufacturer-website-server-side" className='btn' target='_blank'>Server</a>
                            <a href="https://manufacturer-website-114d0.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                        </div>
                    </div>
                </article>
                <article className='projects__item'>
                <div className='projects__item-image'>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={40}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide>
                                <img src={screencapture21} alt="project 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture22} alt="project 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture23} alt="project 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture24} alt="project 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture25} alt="project 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture26} alt="project 2" />
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    <div className='projects__item-features'>
                        <h3>Warehouse management system website</h3>
                        <div>
                            <h3>Overview</h3>
                        </div>
                        <div className="projects__item-btn">
                            <a href="https://github.com/jrtanmoy/warehouse-management-clint-site" className='btn' target='_blank'>Client</a>
                            <a href="https://github.com/jrtanmoy/warehouse-management-server-site" className='btn' target='_blank'>Server</a>
                            <a href="https://groxi-warehouse.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                        </div>
                    </div>
                </article>
                <article className='projects__item'>
                <div className='projects__item-image'>
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={40}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                           


                        >
                            <SwiperSlide>
                                <img src={screencapture31} alt="project 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture32} alt="project 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture33} alt="project 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={screencapture34} alt="project 3" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className='projects__item-features'>
                        <h3>Independent service provider website</h3>
                        <div>
                            <h3>Overview</h3>
                        </div>
                        <div className="projects__item-btn">
                            <a href="https://github.com/jrtanmoy/independent-service-provider-website" className='btn' target='_blank'>Client-side</a>
                            <a href="https://independent-service-prov-3df5f.web.app/" className='btn btn-primary' target='_blank'>Live site</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;