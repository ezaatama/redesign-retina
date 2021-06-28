import React from 'react'
import './HeaderSection.css'
import { Button } from './Button'
import Content from './Content'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaWhatsapp
  } from 'react-icons/fa';

function HeaderSection({
    heading,
    subtitle,
    descHeading,
    titleRight,
    subtitleRight,
    descRight,
    buttonLabel
}) {
    return (
        <>
            <section className="header-section">
                <div className="header-container">
                    <div className="col">
                        <div className="header-text-left">
                            <h1 className="title-heading">{heading}</h1>
                            <p className="subtitle-heading">{subtitle}</p><hr/>
                            <p className="description-heading">{descHeading}</p>
                            <div className="sosial-media">
                                <a
                                className="sosial-link"
                                href='#'
                                aria-label='Instagram'
                                >
                                <FaInstagram />
                                </a>
                                <a
                                className="sosial-link"
                                href='#'
                                aria-label='Facebook'
                                >
                                <FaFacebook />
                                </a>
                                <a
                                className="sosial-link"
                                href='#'
                                aria-label='Whatsapp'
                                >
                                <FaWhatsapp />
                                </a>
                                <a
                                className="sosial-link"
                                href='#'
                                aria-label='Youtube'
                                >
                                <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-text-right">
                            <p className="subtitle-right">{subtitleRight}</p>
                            <h1 className="title-right">{titleRight}</h1>
                            <h2 className="description-right">{descRight}</h2>
                                <div className="learn-more">
                                    <a href="#">
                                        <Button buttonSize='btn--wide' buttonColor='yellow' className="button-learn-more">{buttonLabel}</Button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <Content />
        </>
    )
}

export default HeaderSection
