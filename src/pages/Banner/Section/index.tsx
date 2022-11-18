import React from "react";

import SponsoredImg from '../../../assets/image/slide-4.avif'
import './style.scss';

const Section = () => {
    return (
        <div className="section v-center h-center">
            <div>
                <h1>London's favourite venue finding platform</h1>
                <h2>Find and contact unique venues in london for your next event</h2>
                <div className="search-wrapper d-flex h-center">
                    <input className="event-location" placeholder="Where is your event?"/>
                    <input className="event-type" placeholder="What type of event?"/>
                    <div className="search-btn">
                        <p>Search</p>
                    </div>
                </div>
                <div className='sponsored'>
                    <img src={SponsoredImg} alt="sponsored-img"/>
                </div>
            </div>
        </div>
    );
}

export default Section;