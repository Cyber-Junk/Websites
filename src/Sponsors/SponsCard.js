import React from 'react';

function SponsCard({ id, src, post }) {
    return (
        <div className="d-flex flex-column m-3 justify-content-between align-items-center p-3 bg-white shadow" style={{ borderRadius: "10px" }}>
            {!src ?
                <img src={require(`../Data/Sponsimage/${id}.webp`).default} className="" alt="Company_logo" height="150" width="150" />
                :
                <a href={src} style={{ cursor: "pointer" }} target="_blank">
                    <img src={require(`../Data/Sponsimage/${id}.webp`).default} className="" alt="Company_logo" height="150" width="150" />
                </a>
            }
            <h6 className="mt-3">{post}</h6>
        </div>
    )
}

export default SponsCard