import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="container-contact display-1">
            <div className="contact-items card display-1">
                <div className="contact-item-left display-1">
                    <div className="contact-details display-3">
                        <div>
                            <p className="contact-detail-title">CONTACT US</p>
                        </div>
                        <div>
                            <p className="contact-detail-description-1 font-3">Our team is here to help</p>
                        </div>
                        <div>
                            <p className="contact-detail-description-2 font-3">We would love to hear from you!</p>
                        </div>
                        <div>
                            {/* <div className="contact-details display-2">
                                <div className="display-4"><i className="bx bx-current-location"></i></div>
                                <div className="display-4">
                                    <p className="contact-detail-1">Abu Road, Rajasthan</p>
                                </div>
                            </div> */}
                            <div className="contact-details display-2">
                                <div className="display-4"><i className="bx bx-mail-send"></i></div>
                                <div className="display-4">
                                    <p className="contact-detail-2">cyberjunkfoundation@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-details display-2">
                                <div className="display-4"><i className="bx bxs-phone-call"></i></div>
                                <div className="display-4">
                                    <p className="contact-detail-3">+91 9999999999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-item-right">
                    <div className="contact-form">
                        <h3 className="contact-form-title display-1">Let's Talk.</h3>
                        <p className="contact-form-text-1 display-1">We are happy to answer any queries you might have.</p>
                        <p className="contact-form-text-2 display-1">Got a question? Please fill out the form below.</p>
                        <form className="contact-form-items">
                            <div className="contact-form-item margin-1 color1">
                                <label for="fullName">Full Name*</label>
                                <input type="text" name="fullName" placeholder="Cyber Junk Foundation" />
                            </div>
                            <div className="contact-form-item margin-1 color1">
                                <label for="email">Email Address*</label>
                                <input type="email" name="email" placeholder="yourmail@gmail.com" />
                            </div>
                            <div className="contact-form-item margin-1 color1">
                                <label for="phone">Mobile Number*</label>
                                <input type="text" name="phone" placeholder="+91 9999999999" />
                            </div>
                            <div className="contact-form-item contact-form-item-message color1">
                                <label for="message">Your Message*</label>
                                <textarea name="message" rows="1" placeholder="type your message here"></textarea>
                            </div>
                            <div className="contact-form-footer"><p>*required fields</p></div>
                            <div className="contact-form-button display-1">
                                <button type="submit" className="ud-main-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
