import React from 'react';
import amazon from '../assets/images/brands/amazon.png';
import apple from '../assets/images/brands/apple.jfif';
import google from '../assets/images/brands/google.png';
import smash from '../assets/images/brands/smash.png';
import './Brands.css';

const Brands2 = () => {

    return (
        <div className="brand-section section-space-bottom">
            <div className="small-container">
                <div className="swiper brand-active">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <span><a href="#"><img src={amazon} alt="" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={apple} alt="" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={google} alt="" /></a></span>
                        </div>
                        <div className="swiper-slide">
                            <span><a href="#"><img src={smash} alt="" /></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands2;