import React, { useEffect, useState } from "react";

import {
  HAMBURGER_ICON_URL,
  YOUTUBE_LOGO,
  USER_LOGO,
  SEARCH_VIDEOS_URL,
} from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { cacheResult } from "../redux/searchSlice";
import { YOUTUBE_AUTOCOMPLETE_SEARCH_API } from "../Constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchQueryCache = useSelector((store) => store.search);

  const ChangeMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQueryCache[searchQuery]) {
        setSuggestions(searchQueryCache[searchQuery]);
      } else {
        getQueries();
      }
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  const getQueries = async () => {
    const JSONQuery = await fetch(
      YOUTUBE_AUTOCOMPLETE_SEARCH_API + searchQuery
    );
    const query = await JSONQuery.json();

    //we have to use searchQuery in [] because if we don't use, it will set every key as "searchQuery".
    dispatch(cacheResult({ [searchQuery]: query[1] }));
    setSuggestions(query[1]);
  };

  const SearchWithKeyword = async (s) => {
    const response = await fetch(SEARCH_VIDEOS_URL + s);
    const searchVideos = await response.json();
    console.log(searchVideos);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 rounded-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer m-2"
          alt="menu"
          onClick={() => ChangeMenu()}
          src={HAMBURGER_ICON_URL}
        />
        <a href="/">
          <img
            className="h-12 cursor-pointer"
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>
      <div className="col-span-10 px-32">
        <input
          className="border border-gray-400 rounded-l-full w-1/2 p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>

        <button onClick={()=>{SearchWithKeyword(searchQuery)}} className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200">
          🔍
        </button>

        {showSuggestions && (
          <div className="fixed shadow-xl bg-white w-[28rem] p-2 my-1 rounded-xl">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li
                  
                    onClick={()=> setSearchQuery(s)}
                    key={s}
                    className="py-2 px-3  hover:bg-gray-200"
                  >
                    {" 🔍 " + s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 cursor-pointer m-2"
          alt="user-logo"
          src={USER_LOGO}
        />
      </div>
    </div>
  );
};

export default Header;
