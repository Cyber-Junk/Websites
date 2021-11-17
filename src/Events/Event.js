import React from 'react';
import './Event.css';

function Event({ url, name, date, detail }) {
    return (
        <div class="card mx-5 my-3" style={{ width: "400px" }}>
            <img src={url} class="card-img-top" alt="..." height="300"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{detail}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <button type="button" class="btn btn-dark">Register</button>
            </div>
        </div>
    )
}

export default Event