import React from 'react'
import VideoCard from './VideoCard'

const sampleThumbs = [
  'https://images.unsplash.com/photo-1543353071-087092ec393f?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1512058564366-c9e3cb4af1d9?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1543352634-7f91a5c9f6d5?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
]

const VideoGrid = ({ items = sampleThumbs }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((src, i) => (
          <VideoCard key={i} src={src} label={`Video ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default VideoGrid
