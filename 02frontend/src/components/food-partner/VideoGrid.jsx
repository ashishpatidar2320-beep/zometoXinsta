import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({fooditems }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {fooditems.map((fooditem, i) => (
          <VideoCard key={i} src={fooditem.video} label={fooditem.name} />
        ))}
      </div>
    </div>
  )
}

export default VideoGrid
