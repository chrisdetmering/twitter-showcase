import React from 'react';
import discover from './images/discover.JPG';
import search from './images/search.JPG';

import './HomePage.css';

const HomePage = () => {

    return (
        <div id="home-content">
            <div id="title" className="text-div scroll-div in-view">
                <div id="sub-title">Using Twitter to Discover</div>
                <div id="main-title">Electronic Music</div>
            </div>
            <div className="pointer">V</div>
            <div id="search" className="text-div scroll-div" onWheel={handleMouseOver}>
                <div className="info-div">
                    <img src={search} className="info-img" />
                    <div className="info-text">
                        <span>Search Your Favorite DJs</span>
                        <br /><br />
                        Search for specific DJs by entering their Twitter handle into the search field, then scroll through to see their latest tweets.
                        Or, you can search by keyword to see what other people have to say about that topic.
                    </div>
                </div>
            </div>
            <div id="discover-div" className="text-div scroll-div end">
                <div className="info-div">
                    <div className="info-text">
                        <span>Discover New EDM Artists</span>
                        <br /><br />
                        Select the name of one of the my top five DJs to view their most recent tweets.
                        Scroll through their latest statuses to see what they're about and discover some of their latest news and music!
                    </div>
                    <img src={discover} className="info-img" />
                </div>
            </div>
        </div>
    )

}

export default HomePage;