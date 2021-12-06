import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="row px-2 py-5 home">
                <div className="col-lg-6 col-md-12 col-sm-12 text-center my-auto">
                    <h2 className="big-heading">FOR THE H4CK3RS</h2>
                    <h2 className="big-heading">BY THE H4CK3RS</h2>
                    <p className="text my-3">Cybersecurity is the ozone layer of this digital world, start your amazing journey with the community!</p>
                    <a href="https://discord.gg/ZmCmkw2enz" target="_blank">
                        <button className="btn btn-success button my-3">Join the Community</button>
                    </a>
                    <div className="marq mt-5">
                        <marquee width="80%">
                            <p className="list">Research | Discussion | Workshop | live tryhackme | CTFs | Cyber Talks | Research
                                Discussion | Workshop | live tryhackme | CTFs | Talks | Research | Discussion | Workshop | live tryhackme | CTFs
                            </p>
                        </marquee>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 m-auto">
                    <img src={require("./Saly-19.png").default} alt="svg" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Home