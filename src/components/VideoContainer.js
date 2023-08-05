import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap">
      {videoItems.map((video) => {
        return (<Link  key={video.id} to={"/watch?v=" + video.id}> <VideoCard video={video} /></Link>);
      })} 
    </div>
  );
};

export default VideoContainer;
