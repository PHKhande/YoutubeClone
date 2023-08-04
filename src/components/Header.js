import React from "react";

import { HAMBURGER_ICON_URL, YOUTUBE_LOGO, USER_LOGO } from "../Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {

  const dispatch = useDispatch();
  const ChangeMenu = () => {
    dispatch(toggleMenu());
  }; 

  return (
    <div className="grid grid-flow-col py-5 m-2 border border-gray-300 rounded-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer m-2"
          alt="menu"
          onClick={() => ChangeMenu()}
          src={HAMBURGER_ICON_URL}
        />
        <img
          className="h-12 cursor-pointer"
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="border border-gray-400 rounded-l-full w-1/2 p-2"
          type="text"
        ></input>
        <button className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200">
          🔍
        </button>
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
