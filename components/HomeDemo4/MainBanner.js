import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="content">
                        
                        <h1>Own your land today</h1>
                        <span className="sub-title">We have the best payment plans</span>

                        <img src="/images/banner/land-49.jpg" alt="image" />
                    </div>
                </div>
                
                {/* Shape Images */}
                <div className="banner-shape3">
                    <img src="/images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape8">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
                <div className="banner-shape7">
                    <img src="/images/shape/shape11.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default MainBanner;