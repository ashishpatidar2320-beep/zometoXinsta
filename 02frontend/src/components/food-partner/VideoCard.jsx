

import React from "react";

const VideoCard = ({ src, label = "Video" }) => {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm bg-gray-900">

      <video
        src={src + "#t=1"}   // 👈 forces browser to load frame at 1s
        className="w-full h-full object-cover"
        muted
        preload="metadata"
      />

      <div className="absolute inset-0  flex ml-1 items-end justify-centerr">
        <span className="text-white text-sm font-semibold">{label}</span>
      </div>

    </div>
  );
};

export default VideoCard;
