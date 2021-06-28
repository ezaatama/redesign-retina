import React from 'react'
import './Footer.css'
import {
    FaInstagram,
    FaYoutube,
    FaWhatsapp
  } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-email">
                    <div className="content-email">
                        <h1 className="contact-us">Contact Us</h1>
                        <span className="email">
                            <input type="email" name="mail" className="mail-to" placeholder="nama@email.com"/>
                        </span>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-col">
                        <h1 className="footer-title">Jakarta</h1>
                        <div className="footer-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.464563812189!2d106.9277721!3d-6.2330807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cb8cdff7177%3A0x1a69fbfa7edcfdbb!2sJl.%20Taman%20Malaka%20Selatan%20No.29a%2C%20RT.1%2FRW.9%2C%20Pd.%20Klp.%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013450!5e0!3m2!1sen!2sid!4v1624603681248!5m2!1sen!2sid" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <ul className="footer-social">
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=6287745607172" className="social-links">
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/retina_jkt/" className="social-links">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCDC2Rg35QGU7eZaqE8COzLQ" className="social-links">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-title">Cirebon</h1>
                        <div className="footer-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.483018668801!2d108.54548281477173!3d-6.71075329514842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee26b22b5a33f%3A0xf71b0b6d72e30b14!2sRETINA%20CREATIVE%20STUDIO!5e0!3m2!1sen!2sid!4v1624604094063!5m2!1sen!2sid" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <ul className="footer-social">
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=687838418726" className="social-links">
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/retinacreative.studio/" className="social-links">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCDC2Rg35QGU7eZaqE8COzLQ" className="social-links">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-title">Yogyakarta</h1>
                        <div className="footer-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5223479280835!2d110.39068081477775!3d-7.734283294425279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5917b7d57c1f%3A0x32d5e6ffcbc45f00!2sJl.%20Damai%20No.12%2C%20Tambakan%2C%20Sinduharjo%2C%20Kec.%20Ngaglik%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055581!5e0!3m2!1sen!2sid!4v1624604135664!5m2!1sen!2sid" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <ul className="footer-social">
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=687839924141" className="social-links">
                                    <FaWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/retina_yk/" className="social-links">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCDC2Rg35QGU7eZaqE8COzLQ" className="social-links">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Footer
