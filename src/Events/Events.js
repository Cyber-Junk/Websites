import React from 'react'
import Event from './Event';
import data from "../Data/events.json"

function Events() {
    return (
        <div className="container-fluid min-vh-100 text-center">
            {/* <div className="row m-auto">
                {data.map(el => {
                    return <Event url={require(`../Data/posters/${el.id}.png`).default} name={el.name} detail={el.detail} link={el.link} />
                })}
            </div> */}
            <h1 className="coming">Coming Soon...</h1>
        </div>
    )
}

export default Events