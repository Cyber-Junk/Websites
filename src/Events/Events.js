import React from 'react'
import Event from './Event';
import './Events.css';
import Cal from './Cal'

function Events() {

    return (
        <div className="events">
            <div className="event">
                <Event url="https://source.unsplash.com/random" name="Web-Development" date="Mon, May 25th 2020" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero." />
                <Event url="https://source.unsplash.com/random" name="Python" date="Mon, May 25th 2020" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero." />
                <Event url="https://source.unsplash.com/random" name="App-Development" date="Mon, May 25th 2020" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero." />
                <Event url="https://source.unsplash.com/random" name="AI" date="Mon, May 25th 2020" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero." />
                <Event url="https://source.unsplash.com/random" name="ML" date="Mon, May 25th 2020" detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero." />
            </div>
            <div className="cal m-4">
                <Cal/>
            </div>
        </div>
    )
}

export default Events