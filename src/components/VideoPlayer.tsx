import React, { useRef, useState, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Share,
  MoreHorizontal,
  Play,
} from "lucide-react";
import type { Video } from "../types";

interface VideoPlayerProps {
  video: Video;
  onLike: (videoId: string) => void;
  onComment: (videoId: string) => void;
  onShare: (videoId: string) => void;
  showLogin: boolean;
  onShowLogin: () => void; // 添加这一行
  isLoggedIn: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  onLike,
  onComment,
  onShare,
  showLogin,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current
            .play()
            .catch((error) => console.error("Video play failed:", error));
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .catch((error) => console.error("Video play failed:", error));
        setIsPlaying(true);
      }
    }
  };

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  const formatCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + "万";
    }
    return count.toString();
  };

  return (
    <div className="video-container">
      <div className="video-wrapper" onClick={togglePlay}>
        <video
          ref={videoRef}
          className="video"
          src={video.url}
          loop
          muted
          playsInline
        />
        {!isPlaying && (
          <div className="play-button">
            <Play size={60} />
          </div>
        )}
      </div>

      {showLogin && <div className="video-glass-overlay"></div>}

      <div className="video-info">
        <div className="author-info">
          <img
            src={video.author.avatar}
            alt={video.author.username}
            className="avatar"
          />
          <div className="author-details">
            <h3 className="username">@{video.author.username}</h3>
            <p className="description">{video.description}</p>
          </div>
        </div>

        <div className="video-actions">
          <button
            className={`action-btn ${video.isLiked ? "liked" : ""}`}
            onClick={(e) => handleActionClick(e, () => onLike(video.id))}
          >
            <Heart size={32} fill={video.isLiked ? "#ff4757" : "none"} />
            <span>{formatCount(video.likes)}</span>
          </button>

          <button
            className="action-btn"
            onClick={(e) => handleActionClick(e, () => onComment(video.id))}
          >
            <MessageCircle size={32} />
            <span>{formatCount(video.comments)}</span>
          </button>

          <button
            className="action-btn"
            onClick={(e) => handleActionClick(e, () => onShare(video.id))}
          >
            <Share size={32} />
            <span>{formatCount(video.shares)}</span>
          </button>

          <button className="action-btn" onClick={(e) => e.stopPropagation()}>
            <MoreHorizontal size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
