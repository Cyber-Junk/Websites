import React from 'react';
import './Event.css';

function Event({ url, name, date, detail }) {
    return (
        <div className="event">
            <section className="dark">
                <div className="container py-4">
                    <article className="postcard dark blue">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={url} alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title blue"><a href="#">{name}</a></h1>
                            <div className="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>{date}
                                </time>
                            </div>
                            <div className="postcard__preview-txt mt-3">{detail}</div>
                            <button type="button" class="btn btn-dark mt-3">Register</button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Event