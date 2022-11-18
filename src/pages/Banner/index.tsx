import React from "react";

import Menu from "./Menu";
import Section from "./Section";
import RatingReviewsMark from "./RatingReviewsMark";

import './style.scss';

const Banner = () => {
    return (
        <div className="banner pos-relative">
            <Menu />
            <Section />
            <RatingReviewsMark />
        </div>
    );
}

export default Banner;