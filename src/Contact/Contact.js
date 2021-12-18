import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="main">
            <div className="box mx-5">
                <div className="svg">
                    <img src="/contact.webp" width="100%" alt="Contact_svg"/>
                </div>
                <div className="form my-5">
                    <h1 className="m-5">Contact US</h1>
                    <input className="mx-5 my-3 form-control w-75" type="text" aria-label="Checkbox for following text input" placeholder="Name" />
                    <input className="mx-5 my-3 form-control w-75" type="email" aria-label="Checkbox for following text input" placeholder="Email" />
                    <textarea class="mx-5 my-3 form-control w-75" placeholder="Message" id="floatingTextarea"></textarea>
                    <button type="button" class="btn btn-primary m-5">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact