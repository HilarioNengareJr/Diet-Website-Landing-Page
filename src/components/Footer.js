import React from "react";
import './Footer.css';
import { Heart } from "react-ionicons";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top section active">
                <div className="container">

                    <div className="footer-list">

                        <p className="footer-list-title">Subscribe Newsletter</p>

                        <p className="footer-list-text">
                            Lorem Ipsum has been them an industry printer took a galley make book.
                        </p>

                        <form action="" className="footer-form">
                            <input type="email" name="email_address" aria-label="email" placeholder="Enter email" required="" className="email-field" />

                            <button type="submit" className="btn btn-secondary">Subscribe Now</button>
                        </form>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">All Courses</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Daily Exercise</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Find Your Balance</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Personal Program</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Natural Process</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Immune System</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Gives You Energy</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Help Links</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Discussion</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Terms &amp; Conditions</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Customer Support</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Course FAQ’s</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Online Class</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Opening Hours</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Mon-Fri: 9 AM – 6 PM</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Saturday: 9 AM – 4 PM</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Sunday: Closed</a>
                        </li>

                        <li>
                            <p className="footer-list-title address-title">Location</p>
                        </li>

                        <li>
                            <address className="address">
                                176 W street name, New<br />
                                York, NY 10014
                            </address>
                        </li>

                    </ul>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                        © 2021 Fit Made With
                        <Heart
                            color={'var(--orange-web)'}
                            height="18px"
                            width="18px"
                            aria-hidden="true" role="img" className="ion-icon md hydrated"
                        /> by 
                        <a href="#" className="copyright-link"> Hilario Nengare Jr</a>
                    </p>

                    <ul className="footer-bottom-list">

                        <li className="footer-bottom-item">
                            <a href="#" className="footer-bottom-link">Terms of Service</a>
                        </li>

                        <li className="footer-bottom-item">
                            <a href="#" className="footer-bottom-link">Privacy Policy</a>
                        </li>

                        <li className="footer-bottom-item">
                            <a href="#" className="footer-bottom-link">Sitemap</a>
                        </li>

                        <li className="footer-bottom-item">
                            <a href="#" className="footer-bottom-link">Security</a>
                        </li>

                    </ul>

                </div>
            </div>

        </footer>
    );
};

export default Footer;