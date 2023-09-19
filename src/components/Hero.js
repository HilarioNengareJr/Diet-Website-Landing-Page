import React, { useState } from 'react';
import { LogoFacebook, LogoTwitter, LogoSkype, LogoLinkedin } from 'react-ionicons';
import './Hero.css';

const Hero = () => {

    const [isFacebookHovered, setIsFacebookHovered] = useState(false);
    const [isSkypeHovered, setIsSkypeHovered] = useState(false);
    const [isTwitterHovered, setIsTwitterHovered] = useState(false);
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);

    return (
        <section className="section hero active" aria-label="hero" id="home" style={{ backgroundImage: 'url(/images/hero-banner.jpg)' }}>
            <div className="container">

                <p className="hero-subtitle">Fitness &amp; Nutrition</p>

                <h1 className="h1 hero-title">This life style for your fitness, not only diet.</h1>

                <p className="hero-text">
                    It has survived not only five centuries but also strived.
                </p>

                <a href="#" className="btn btn-secondary">Start Course</a>

                <div className="social-wrapper">

                    <p className="social-title">Connect with us:</p>

                    <ul className="social-list">

                        <li>
                            <a href="#" className="social-link" onMouseEnter={() => setIsFacebookHovered(true)}
                                onMouseLeave={() => setIsFacebookHovered(false)}>
                                <LogoFacebook
                                    color={isFacebookHovered ? 'white' : 'inherit'}
                                    height="14px"
                                    width="14px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link" onMouseEnter={() => setIsSkypeHovered(true)}
                                onMouseLeave={() => setIsSkypeHovered(false)}>
                                <LogoSkype
                                    color={isSkypeHovered ? 'white' : 'inherit'}
                                    height="14px"
                                    width="14px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link" onMouseEnter={() => setIsTwitterHovered(true)}
                                onMouseLeave={() => setIsTwitterHovered(false)}>
                                <LogoTwitter
                                    color={isTwitterHovered ? 'white' : 'inherit'}
                                    height="14px"
                                    width="14px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link" onMouseEnter={() => setIsLinkedinHovered(true)}
                                onMouseLeave={() => setIsLinkedinHovered(false)}>
                                <LogoLinkedin
                                    color={isLinkedinHovered ? 'white' : 'inherit'}
                                    height="14px"
                                    width="14px"
                                    aria-hidden="true" role="img" className="md hydrated"
                                />
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </section>
    );
}

export default Hero;