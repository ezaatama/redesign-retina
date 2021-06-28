import React from 'react'
import { Button } from './Button'
import './ServicesSection.css'

function ServicesSection({
    lightBg,
    lightText,
    lightTextDesc,
    imgStart,
    headline,
    description,
    img,
    alt,
    buttonLabel
}) {
    return (
        <>
            <div className={lightBg ? 'service__right-section' : 'service__left-section'}>
                <div className="container">
                    <div className="row service__hero-row" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="row">
                            <div className={lightBg ? 'col-service-border-top' : 'col-service-border-top-dark'}>
                            </div>
                            <div className="col-service-img">
                                <div className="service__hero-img-wrapper">
                                        <img src={img} alt={alt} className="service__hero-img" />
                                </div>
                            </div>
                            <div className={lightBg ? 'col-service-border' : 'col-service-border-dark'}>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-service-text">
                                <div className="service__hero-text-wrapper">
                                    <h1 className={lightText ? 'heading' : 'heading-dark'}>
                                        {headline}
                                    </h1>
                                    <p className={lightTextDesc ? 'service__hero-subtitle' : 'service__hero-subtitle-dark'}>
                                        {description}
                                    </p>
                                    <a href="#">
                                        <Button buttonSize='btn--wide' buttonColor='yellow'>{buttonLabel}</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSection
