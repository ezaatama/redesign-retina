import React, { useState } from 'react';
import './Slider.css'
import Slider from 'react-slick';
import Menu from './Menu'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
    FaInstagram,
    FaYoutube
  } from 'react-icons/fa';

const ImageSlider = () => {

    const [items, setItems] = useState(Menu);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {
                        items.map((elem) => {
                            const { title, image, jobTitle, instagram, youtube, alt} = elem;
            return(

                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={image} alt={alt} className="image-inner"/>
                                    </div>
                                    <ul className="social-icons">
                                        <li>
                                            <a href={instagram} className="social-links">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={youtube} className="social-links">
                                                <FaYoutube />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="details">
                                        <h2 className="title-slider">{title} <span className="job-title">{jobTitle}</span></h2>
                                    </div>
                                </div>
                            </div>
                    
                    )
                })
            }
        </Slider>
    )
}

export default ImageSlider
