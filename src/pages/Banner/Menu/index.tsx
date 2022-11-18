import React from 'react'

import SearchIcon from '../../../assets/image/search_icon_white.webp';
import './style.scss';

const Menu = () => {
    const [collapseNavbar, setCollapseNavbar] = React.useState(true);

    const handleCollapseNavbar = () => {
        setCollapseNavbar(!collapseNavbar);
    };

    return (
        <div className="menu">
            <div className="d-flex space-between" >
                <div className="header-logo v-center">
                    <div className="logo"/>
                    <div className="search-btn v-center">
                        <img src={SearchIcon} alt="search-icon" className="search-btn-icon"/>
                        <p>search</p>
                    </div>
                </div>
                <div className="">
                    <div className="desktop-navbar">
                        <ul>
                            <li>
                                <a href="search">Search</a>
                            </li>
                            <li>
                                <a href="how-it-works">How it works</a>
                            </li>
                            <li>
                                <a href="list-your-venue">List your Venue</a>
                            </li>
                            <li>
                                <a href="venue-login">Venue Login</a>
                            </li>
                            <li>
                                <a href="wishlist">Wishlist</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={handleCollapseNavbar}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
            {!collapseNavbar && (<div className="laptop-navbar">
                <ul>
                    <li>
                        <a href="how-it-works">How it works</a>
                    </li>
                    <li>
                        <a href="list-your-venue">List your Venue</a>
                    </li>
                    <li>
                        <a href="venue-login">Venue Login</a>
                    </li>
                    <li>
                        <a href="blog">Blog</a>
                    </li>
                    <li>
                        <a href="wishlist">Wishlist</a>
                    </li>
                </ul>
            </div>)}
        </div>
    );
}

export default Menu;