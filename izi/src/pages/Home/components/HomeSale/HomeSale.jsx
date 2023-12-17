import React from 'react';
import "./homeSale.scss";

const HomeSale = () => {
    return (
        <div className="home-sale page-container">
            <div className="sale-content">
                <div className="sale-title d-flex flex-column">
                    <h2 data-a="fade-right">Sale!</h2>
                    <h3 data-a="fade-right" className='text-center text-sm-start'>10% Off On All Products!</h3>
                    <button data-a="fade-right" className='general-button'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSale;