import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import './DiscoverPage.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {changeElementClass, getTweetsByUsername, createTweetDivs} from '../../helpers';

const DiscoverPage = () => {
    const [tweetArray, setTweetArray] = useState([]);

    useEffect(() => {
        getTweetsByUsername('illenium')
    }, [])

    const handleClick = async (event) => {
        changeElementClass(event.target.id, '.option-button', 'selected-option');
        setTweetArray(await getTweetsByUsername(event.target.id));
    }

    return (
        <div id="discover-content">
            {
                tweetArray.length === 0 ?
                    <div id="loader-div" className="page-content">
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    </div>
                :   createTweetDivs(tweetArray)
            }
            {
                tweetArray.length === 1 ? <div className="pointer"></div> : <div id="scroll-pointer" className="pointer">V</div>
            }
            <div id="artist-options">
                <div id="illenium" className="option-button selected-option" onClick={handleClick}>Illenium</div>
                <div id="iamalanwalker" className="option-button" onClick={handleClick}>Alan Walker</div>
                <div id="kygomusic" className="option-button" onClick={handleClick}>Kygo</div>
                <div id="wearegalantis" className="option-button" onClick={handleClick}>Galantis</div>
                <div id="KSHMRmusic" className="option-button" onClick={handleClick}>KSHMR</div>
            </div>
        </div>
    )

}

export default DiscoverPage;