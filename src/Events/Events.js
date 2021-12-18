import React from 'react'
import Event from './Event';
import data from "../Data/events.json"

function Events() {
    return (
        <div className="container-fluid min-vh-100">
            <div className="row m-auto">
                {data.map(el => {
                    return <Event url={require(`../Data/posters/${el.id}.png`).default} name={el.name} detail={el.detail} link={el.link} />
                })}
            </div>
        </div>
    )
}

export default Events