import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { mockVideos } from "../utils/mockData";
import type { Video } from "../types";

interface FeedProps {
  showLogin: boolean;
  onCommentOpen: (videoId: string) => void;
  onShowLogin: () => void;
  isLoggedIn: boolean;
}

const Feed: React.FC<FeedProps> = ({
  showLogin,
  onCommentOpen,
  onShowLogin,
  isLoggedIn,
}) => {
  const [videos, setVideos] = useState<Video[]>(mockVideos);

  const handleLike = (videoId: string) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === videoId
          ? {
              ...video,
              isLiked: !video.isLiked,
              likes: video.isLiked ? video.likes - 1 : video.likes + 1,
            }
          : video
      )
    );
  };

  const handleShare = (videoId: string) => {
    console.log("分享视频:", videoId);
    // In a real app, you would implement sharing logic here
  };

  return (
    <div className="feed-container">
      <div className="feed">
        {videos.map((video) => (
          <VideoPlayer
            key={video.id}
            video={video}
            onLike={handleLike}
            onComment={isLoggedIn ? onCommentOpen : onShowLogin}
            onShare={handleShare}
            showLogin={showLogin}
            onShowLogin={onShowLogin}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
