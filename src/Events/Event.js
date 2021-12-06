import React from 'react';
import './Event.css';

function Event({ url, name, date, detail }) {
    return (
        <div className="col-lg-4">
            <div className="card card-custom border-white border-0 my-5 mx-auto">
                <div className="card-custom-img" style={{backgroundImage: "url(" + url + ")"}}>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{detail}</p>
                </div>
                <div className="card-footer">
                    <a href="" className="btn btn-primary event_btn">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Event