import React from 'react'
import './BottomSection.css';
import bottomImage from '../images/retina.png'
import appStore from '../images/app-store.png'
import playStore from '../images/google-play.png'

function BottomSection() {
    return (
        <>
            <div className="background-bottom">
                <div className="bottom-container">
                    <div className="col">
                        <div className="bottom-image">
                            <img src={bottomImage} alt="retina-image" className="image-bot" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="bottom-text">
                            <h1 className="text-heading">Retina</h1>
                            <p className="text-desc">With a team that is able to innovate and reliable, we are able to work together professionally as corporate and personal partners</p>
                            <p className="text-download">Download App Now!</p>
                        </div>
                        <div className="image-download">
                            <img src={appStore} alt="App Store" className="app-download" />
                            <img src={playStore} alt="Play Store" className="app-download" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSection
