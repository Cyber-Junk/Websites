import React from 'react';
import './Contact.css';
import svg from './Saly-31.png';

function Contact() {
    return (
        <div className="container-contact contact-display-6">
            <div className="contact-items contact-glass-2 contact-display-1">
                <div className="contact-item-left contact-display-1">
                    <div className="contact-details contact-display-3">
                        <div>
                            <p className="contact-detail-title">CONTACT US</p>
                        </div>
                        <div>
                            <p className="contact-detail-description-1 contact-font-5">Our team is here to help</p>
                        </div>
                        <div>
                            <p className="contact-detail-description-2 contact-font-5">We would love to hear from you!</p>
                        </div>
                        <div style={{ alignItems: "center" }} className="contact-display-4">
                            <div style={{ marginLeft: "37px" }} className="contact-display-5">
                                {/* <div className="contact-detail-items contact-display-2">
                                    <div className="contact-display-4"><i className="bx bx-current-location"></i></div>
                                    <div className="contact-display-4">
                                        <p className="contact-detail-1">Abu Road, Rajasthan</p>
                                    </div>
                                </div> */}
                                <div className="contact-detail-items">
                                    <div className="contact-display-1"><i className="bx bx-message"></i></div>
                                    {/* <div className="contact-display-4"><i className="gg-mail"></i></div> */}
                                    <div>
                                        <p className="contact-detail-2 contact-display-1">cyberjunk.cj@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-detail-links contact-display-1">
                                    <ul style={{ justifyContent: "space-between" }} className="contact-display-4">
                                        <li>
                                            <a href="https://www.linkedin.com/company/cyber-junk/" target="_blank"> <i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/CyberJunk_?t=rfuxIdRiH1WBAdRKYW3hjQ&s=09" target="_blank"
                                            ><i className="bx bxl-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com/cyber.junk_?utm_medium=copy_link" target="_blank">
                                                <i className="bx bxl-instagram-alt"></i
                                                ></a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="contact-detail-items">
                                    <div className="contact-display-1"><i className="bx bxs-phone-call"></i></div>
                                    <div>
                                        <p className="contact-detail-3 contact-display-1">+91 9999999999</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="contact-detail-image contact-display-6">
                                <img className="contact-svg-1" src={svg} alt="SVG" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-item-right contact-display-2">
                    <div className="contact-form">
                        <h3 className="contact-form-title contact-display-1 contact-font-3">Let's Talk.</h3>
                        <p className="contact-form-text-1 contact-display-1">We are happy to answer any queries you might have.</p>
                        <p className="contact-form-text-2 contact-display-1">Got a question? Please fill out the form below.</p>
                        <form className="contact-form-items">
                            <div className="contact-form-item">
                                <label for="fullName">Full Name*</label>
                                <input type="text" name="fullName" placeholder="Cyber Junk Foundation" />
                            </div>
                            <div className="contact-form-item">
                                <label for="email">Email Address*</label>
                                <input type="email" name="email" placeholder="yourmail@gmail.com" />
                            </div>
                            <div className="contact-form-item">
                                <label for="phone">Mobile Number*</label>
                                <input type="text" name="phone" placeholder="+91 9999999999" />
                            </div>
                            <div className="contact-form-item contact-form-item-message">
                                <label for="message">Your Message*</label>
                                <textarea name="message" rows="1" placeholder="type your message here"></textarea>
                            </div>
                            <div className="contact-form-footer">
                                <p>*required fields</p>
                            </div>
                            <div className="contact-form-button contact-display-1">
                                <button type="submit" className="ud-main-btn">SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact