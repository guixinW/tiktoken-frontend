import React, { useRef, useState, useEffect } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, Play } from 'lucide-react';
import CommentPanel from './CommentPanel';
import type { Video } from '../types';

interface VideoPlayerProps {
  video: Video;
  onLike: (videoId: string) => void;
  onShare: (videoId: string) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onLike, onShare }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCommentPanelOpen, setIsCommentPanelOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        } else if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleComment = () => {
    setIsCommentPanelOpen(true);
  };

  const handleCloseCommentPanel = () => {
    setIsCommentPanelOpen(false);
  };

  const formatCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
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
      
      <div className="video-info">
        <div className="author-info">
          <img src={video.author.avatar} alt={video.author.username} className="avatar" />
          <div className="author-details">
            <h3 className="username">@{video.author.username}</h3>
            <p className="description">{video.description}</p>
          </div>
        </div>
        
        <div className="video-actions">
          <button 
            className={`action-btn ${video.isLiked ? 'liked' : ''}`}
            onClick={() => onLike(video.id)}
          >
            <Heart size={32} fill={video.isLiked ? '#ff4757' : 'none'} />
            <span>{formatCount(video.likes)}</span>
          </button>
          
          <button className="action-btn" onClick={handleComment}>
            <MessageCircle size={32} />
            <span>{formatCount(video.comments)}</span>
          </button>
          
          <button className="action-btn" onClick={() => onShare(video.id)}>
            <Share size={32} />
            <span>{formatCount(video.shares)}</span>
          </button>
          
          <button className="action-btn">
            <MoreHorizontal size={32} />
          </button>
        </div>
      </div>

      <CommentPanel 
        video={video}
        isOpen={isCommentPanelOpen}
        onClose={handleCloseCommentPanel}
      />
    </div>
  );
};

export default VideoPlayer;