import React from 'react';
import "./hero.scss";
const Hero = () => {
    return (
        <div data-a="zoom-in" className="hero page-container mb-4">
            <div className="hero-content">
                <h1 data-a="fade-up">Style <br /> Comfort& <br /> Affordable</h1>
                <button data-a="fade-up" className='general-button mt-4'>Explore Store</button>
            </div>
        </div>
    )
}

export default Hero;