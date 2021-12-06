import React from 'react';
import './Card.css';

function Card({ profile, name, post, linkedin, twitter }) {
    return (
        <div className="col-xl-3 col-sm-6 my-5 px-4">
            <div className="rounded-xl shadow-sm py-3 mycard">
                <img src={profile} alt="Profile-Photo" className="img-fluid rounded-circle mb-3 shadow-sm" width="50%"/>
                <h5 className="mb-0">{name}</h5><span className="small text-uppercase">{post}</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href={linkedin} className="social-link"><i className='bx bxl-linkedin'></i></a></li>
                    <li className="list-inline-item"><a href={twitter} className="social-link"><i className='bx bxl-twitter'></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Card