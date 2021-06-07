import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import './SearchPage.css';
import { createTweetDivs, getTweetData } from '../../helpers';

const SearchPage = () => {
    const [tweetArray, setTweetArray] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    }

    const handleEnter = async (event) => {
        if (event.code !== "Enter") return;
        if (searchInput.length === 0) {
            setTweetArray([])
            return;
        }

        searchInput.indexOf('@') > -1 ?
            updateTweetArray('/search/content?q', searchInput.slice(1))
            : updateTweetArray('user?username', searchInput);

    }

    const updateTweetArray = (URL, searchTerm) => {
        setIsLoading(true);
        getTweetData(URL, searchTerm)
            .then(result => {
                setIsLoading(false);
                setTweetArray(result);
            })
    }

    return (
        <div id="search-main">
            <div id="input-div">
                <input id="search-input"
                    type="text"
                    placeholder="Search by @user or keyword, then Enter..."
                    onInput={handleInput}
                    onKeyUp={handleEnter} />
            </div>
            {
                isLoading ?
                    <div id="loader-div" className="page-content">
                        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
                    </div>
                    : createTweetDivs(tweetArray)
            }
            {
                tweetArray.length <= 1 ? <div className="pointer"></div> : <div id="scroll-pointer" className="pointer">V</div>
            }
        </div>
    )

}

export default SearchPage;