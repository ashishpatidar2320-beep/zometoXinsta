import React from 'react'

const VideoCard = ({ src, label = 'Video' }) => {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm bg-gray-800">
      <img src={src} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <span className="text-white text-sm font-semibold">{label}</span>
      </div>
    </div>
  )
}

export default VideoCard
