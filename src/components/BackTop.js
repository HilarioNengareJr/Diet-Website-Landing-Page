import React, { useState, useEffect } from "react";
import { ChevronUp } from 'react-ionicons';
import './BackTop.css';

const BackTop = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="#top" className={isActive ? "back-top-btn active" : "back-top-btn"} aria-label="back to top" >
            <ChevronUp
                color={'white'}
                height="18px"
                width="18px"
                aria-hidden="true" role="img" className="md hydrated"
            />
        </a>
    );
}

export default BackTop;
