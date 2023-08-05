import React from "react";

const ButtonList = () => {
  const buttonArray = ["All", "Music", "Trailers", "React", "Node", "Kannada", "All", "Music", "Trailers", "React", "Node", "Kannada", "All", "Music", "Trailers", "React"];
  return (
    <div>
      {buttonArray.map((item, index) => {
        return (
          <button
            key={index}
            className="border border-gray-200 py-1 px-3 m-2 rounded-xl"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
