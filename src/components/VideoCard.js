import React from 'react'

const VideoCard = ({video}) => {

  return (
    <div className="m-2 rounded-xl w-72 shadow-lg">
    <img
      className="rounded-xl w-80"
      alt="Thumbnail"
      src={video.snippet.thumbnails.high.url}
    />

    <div className="m-2">
      <h1 className="font-bold mt-2 font-sans">{video.snippet.title}</h1>
      <h1 className="font-sans font-normal">
        {video.snippet.channelTitle}
      </h1>
      <h1 className="font-sans font-normal pb-2">
        {Math.floor(video.statistics.viewCount / 1000000) + "M views"}
      </h1>
    </div>
  </div>
  )
}

export default VideoCard