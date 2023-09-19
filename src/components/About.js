import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section about active" aria-label="about" id="about" data-section="">
        <div className="container">

          <div className="about-banner img-holder" width="470" height="580">
            <img src="/images/about-banner.jpg" width="470" height="580" loading="lazy" alt="about banner" className="img-cover" />

            <a href="#" className="btn btn-secondary">Meet Instructor</a>
          </div>

          <div className="about-content">

            <p className="section-subtitle">25+ Years Of Experience</p>

            <h2 className="h2 section-title">We have expert instructor for help our students.</h2>

            <p className="section-text">
              Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when
              an unknown
              printe specimen book has survived centuries.
            </p>

            <h3 className="about-h3">100+ Courses</h3>

            <p className="section-text">
              Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when
              an unknown
              printe specimen book has survived centuries.
            </p>

          </div>

        </div>
      </section>
    );
}

export default About;