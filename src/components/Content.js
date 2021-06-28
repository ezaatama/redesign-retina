import React from 'react'
import './Content.css'
import Slider from './Slider/Slider'
import img from '../images/work-05.jpg'

function Content() {
    return (
        <>
            <div className="content-wrapper">
                        <h1 className="title-content">What We Do?</h1>
                        <p className="subtitle-content">With qualified experience and a team spread across 3 regions, we are very optimistic that we can meet the demands of clients from personal to corporate.</p>
                <div className="content-container">    
                    <div className="col-content">
                        <div className="content-image-wrapper">
                            <img src={img} alt="image content" className="image-wrapper" />
                        </div>
                    </div>
                    <div className="col-content">
                        <div className="content-slider-wrapper">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Content
