import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import CommentPanel from '../components/CommentPanel';
import { mockVideos } from '../utils/mockData';
import type { Video } from '../types';

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [commentPanel, setCommentPanel] = useState<{ isOpen: boolean; videoId: string | null }>({
    isOpen: false,
    videoId: null,
  });

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

  const handleComment = (videoId: string) => {
    setCommentPanel({ isOpen: true, videoId });
  };

  const handleShare = (videoId: string) => {
    console.log('分享视频:', videoId);
    // In a real app, you would implement sharing logic here
  };

  const handleCloseCommentPanel = () => {
    setCommentPanel(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="feed-container">
      <div className="feed">
        {videos.map(video => (
          <VideoPlayer
            key={video.id}
            video={video}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        ))}
      </div>
      <CommentPanel
        isOpen={commentPanel.isOpen}
        videoId={commentPanel.videoId}
        onClose={handleCloseCommentPanel}
      />
    </div>
  );
};

export default Feed;
