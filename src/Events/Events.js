import React from 'react'
import Event from './Event';
import './Events.css';

function Events() {
    return (
        <div class="container-fluid min-vh-100">
            <div class="row m-auto">
                <Event url="https://source.unsplash.com/random" name="<100/> Days of Infosec" date="Mon, May 25th 2020" detail="More Info Coming....." />
                <Event url="https://source.unsplash.com/random" name="{100} Days of Code" date="Mon, May 25th 2020" detail="More Info Coming....." />
            </div>
        </div>
    )
}

export default Events