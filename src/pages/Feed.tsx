import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { mockVideos } from '../utils/mockData';
import type { Video } from '../types';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(mockVideos);

  const handleLike = (videoId: string) => {
    setVideos(prev => prev.map(video => 
      video.id === videoId 
        ? { 
            ...video, 
            isLiked: !video.isLiked,
            likes: video.isLiked ? video.likes - 1 : video.likes + 1
          }
        : video
    ));
  };

  const handleShare = (videoId: string) => {
    console.log('分享视频:', videoId);
  };

  return (
    <div className="feed">
      {videos.map(video => (
        <VideoPlayer
          key={video.id}
          video={video}
          onLike={handleLike}
          onShare={handleShare}
        />
      ))}
    </div>
  );
};

export default Feed;