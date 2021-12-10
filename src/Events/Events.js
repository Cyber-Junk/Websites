import React, { useEffect } from 'react'
import Event from './Event';
import './Events.css';

function Events() {
    
    return (
        <div class="container-fluid min-vh-100">
            <div class="row m-auto">
                <Event url={require("./posters/1.png").default} name="<100> Days of Infosec" detail="Weekly two spaces on twitter and live doubt sessions on discord. Get a chance to come to the cyberjunk live stage at twitch to get an opportunity to meet excellent Pentesters and learn from success stories. The fabulous community and networking chance that you will get." link="https://cyberjunk.typeform.com/to/O8se1hcq" />
                <Event url={require("./posters/2.png").default} name="{100} Days of Code" detail="Weekly two spaces on twitter and live doubt sessions on discord. Get a chance to come to the cyberjunk live stage at twitch to get an opportunity to meet excellent Pentesters and learn from success stories. The fabulous community and networking chance that you will get." link="https://cyberjunk.typeform.com/to/pn4Wq371" />
            </div>
        </div>
    )
}

export default Events