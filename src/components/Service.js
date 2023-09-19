import React from 'react';
import { ArrowForward } from 'react-ionicons'
import './Service.css';

const Service = () => {
    return (
        <section className="section service active" aria-label="service" id='service'>
            <div className="container">

                <ul className="grid-list">

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <img src="/images/service-1.svg" width="60" height="60" loading="lazy" alt="Women’s Course" />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Women’s Course</a>
                            </h3>

                            <p className="card-text">
                                Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                            </p>

                            <a href="#" className="btn btn-secondary">
                                <ArrowForward
                                    color={'#ffffff'}
                                    height="18px"
                                    width="18px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card active">

                            <div className="card-icon">
                                <img src="/images/service-2.svg" width="60" height="60" loading="lazy" alt="Basic Course" />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Basic Course</a>
                            </h3>

                            <p className="card-text">
                                Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                            </p>

                            <a href="#" className="btn btn-secondary">
                                <ArrowForward
                                    color={'#ffffff'}
                                    height="18px"
                                    width="18px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <img src="/images/service-3.svg" width="60" height="60" loading="lazy" alt="Men’s Course" />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Men’s Course</a>
                            </h3>

                            <p className="card-text">
                                Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.
                            </p>

                            <a href="#" className="btn btn-secondary">
                                <ArrowForward
                                    color={'#ffffff'}
                                    height="18px"
                                    width="18px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
};

export default Service;