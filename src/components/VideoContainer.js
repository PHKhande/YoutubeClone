import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../Constants";

const VideoContainer = () => {
  let [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    fetchVideoItems();
  }, []);

  const fetchVideoItems = async () => {
    const JSONData = await fetch(YOUTUBE_VIDEO_URL);
    const videoData = await JSONData.json();
    setVideoItems(videoData.items);
  };

  if (!videoItems.length) return null;
  return (
    <div className="flex flex-wrap justify-center">
      {videoItems.map((item) => {
        return (
          <div key={item.id} className="m-2 rounded-xl w-1/5 shadow-lg">
            <img
              className="rounded-xl w-72"
              alt="Thumbnail"
              src={item.snippet.thumbnails.high.url}
            />

            <div className="m-2">
              <h1 className="font-bold mt-2 font-sans">{item.snippet.title}</h1>
              <h1 className="font-sans font-normal">
                {item.snippet.channelTitle}
              </h1>
              <h1 className="font-sans font-normal">
                {Math.floor(item.statistics.viewCount / 1000000) + "M views"}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
