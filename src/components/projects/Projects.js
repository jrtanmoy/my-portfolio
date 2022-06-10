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
import { AiFillCheckCircle } from 'react-icons/ai'




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
                            <h4>Overview :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>It’s a tools manufacturer website.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'> On this website you can order tools.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Implemented Stripe payment method so that user can pay.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>This website has an admin board to control.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Implemented Firebase Login Authentication.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Users can register, log in, sign out, and google sign in themselves.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>There is a private dashboard route. After logging in, the user can see this.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>On the dashboard, there are three nested routes for normal users.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>On the dashboard, there are five nested routes for admin.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Personal favicon used.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>It's also include blog & myprofile etc.... you can take a look....
                                    </small>
                                </div>
                            </article>

                        </div>
                        <div>
                            <h4>Technology Used :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>ReactJs, React - [ router dom, firebase hooks, hook form, query, Toastify ], Tailwind CSS, Daisyui, Firebase, Stripe, Express, MongoDB.
                                    </small>
                                </div>
                            </article>
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
                            <h4>Overview :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>This website is about a Warehouse inventory management system.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'> On this website, authorized users can add, restock, deliver and delete products.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Users can see their items (jwt is used).</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Implemented Firebase Login Authentication.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Users can register, log in, sign out, and google sign in themselves.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Authorized users can access the private routes of Manage Inventory, Add Product & My Products.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>On the Add Product route, users can add product.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Personal favicon used.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>It's also include blog & about .... you can take a look....
                                    </small>
                                </div>
                            </article>

                        </div>
                        <div>
                            <h4>Technology Used :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>ReactJs, React-[router dom, firebase hooks, hook form, Toastify, Bootstrap], Axios, CSS, Bootstrap, Firebase, Express.js, MongoDB.
                                    </small>
                                </div>
                            </article>
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
                            <h4>Overview :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>An independent service provider website.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>In the service section of this website, one can see the whole services.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Users can book service for checkout.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Implemented Firebase Login Authentication.</small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Users can register, log in, sign out, and google sign in themselves.</small>
                                </div>
                            </article>
                            
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>Personal favicon used.
                                    </small>
                                </div>
                            </article>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>It's also include blogs & about me, you can take a look....
                                    </small>
                                </div>
                            </article>

                        </div>
                        <div>
                            <h4>Technology Used :</h4>
                            <article className='projects__details'>
                                <AiFillCheckCircle className='projects__details-icon' />
                                <div>
                                    <small className='text-light'>ReactJs, React-[router dom, firebase hooks, Toastify, Bootstrap], Vanilla CSS, Bootstrap, Firebase.
                                    </small>
                                </div>
                            </article>
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