import React, {useState} from 'react'
import './AboutSection.css'
import work from '../../images/work.png'
import Menu from './Menu'
import { Button } from '../Button'

const AboutSection = () => {
    const [items, setItems] = useState(Menu);
    const [visible, setVisible] = useState(3);

    const showMoreItems = () =>{
        setVisible((prevValue) => prevValue + 3)
    };

    return (
        <>
            <div className="about-section">
                <div className="about-container">
                    <div className="col">
                        <div className="about-section-img">
                            <img src={work} alt="about" className="about-img" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-section-text">
                            <h1 className="heading-about">About Us</h1>
                            <p className="heading-desc">Retina Production is a large multimedia company that is able to compete in the creative industry in Indonesia. With a team that is able to innovate and reliable, we are able to work together professionally as corporate and personal partners. We act as a medium for channeling client thoughts and realizing them in the form of designs, photos, and videos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-section">
                <div className="team-container">
                    <div className="heading-team-container">
                        <h1 className="heading-team">Our Team</h1>
                    </div>
                    <div className="person">

                    {
                        items.slice(0, visible).map((elem) => {
                            const { alt, image, name, position} = elem;

                            return(
                            <div className="row-about">
                                <div className="container-about">
                                    <div className="container-about-inner">
                                        <img src={image} alt={alt} className="circle-img" />
                                    </div>
                                </div>
                                    <div className="name">{name}</div>
                                    <div className="title">{position}</div>
                            </div>
                            )
                        })
                    }
                    </div>
                    <div className="show-more">
                        <Button buttonSize="btn--wide" buttonColor="yellow" onClick={showMoreItems}>Load More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;
