import React from 'react';
import Card from './Card';
import data from '../Data/Team.json';

function Team() {
    return (
        <div className="container">
            <div className="row text-center">
                {data.map(el => {
                    return <Card profile={require(`../Data/profiles/${el.id}.webp`).default} name={el.name} post={el.post} linkedin={el.linkedin} twitter={el.twitter} />
                })}
            </div>
        </div>
    )
}

export default Team