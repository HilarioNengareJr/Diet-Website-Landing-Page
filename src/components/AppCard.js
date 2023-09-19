import React from "react";
import './AppCard.css';

const AppCard = () => {
    return (
        <section className="section app active" aria-label="app" data-section="">
            <div className="container">

                <div className="app-card">

                    <p className="section-subtitle">Mobile App Available</p>

                    <h2 className="h2 section-title">
                        Download our mobile app.<br/>
                            and start coaching anytime.
                    </h2>

                    <div className="wrapper">
                        <a href="#" className="app-link" aria-label="play store">
                            <img src="/images/play-store.jpg" width="134" height="38" loading="lazy" alt="Play Store" className="img"/>
                        </a>

                        <a href="#" className="app-link" aria-label="app store">
                            <img src="/images/app-store.jpg" width="132" height="38" loading="lazy" alt="App Store" className="img"/>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default AppCard;