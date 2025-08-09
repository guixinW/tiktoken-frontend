import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import CommentItem from './CommentItem';
import LoadingSpinner from './LoadingSpinner';
import { mockComments, mockVideos } from '../utils/mockData';
import type { Comment, Video } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface CommentPanelProps {
  isOpen: boolean;
  videoId: string | null;
  onClose: () => void;
}

const CommentPanel: React.FC<CommentPanelProps> = ({ isOpen, videoId, onClose }) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (isOpen && videoId) {
      setStatus('loading');
      // Simulate a network request to fetch comments
      const timer = setTimeout(() => {
        const foundVideo = mockVideos.find(v => v.id === videoId);
        if (foundVideo) {
          setVideo(foundVideo);
          const videoComments = mockComments.filter(c => c.videoId === videoId);
          setComments(videoComments);
          setStatus('success');
        } else {
          setStatus('error');
        }
      }, 500); // Simulate a 500ms network delay

      return () => clearTimeout(timer);
    }
  }, [isOpen, videoId]);

  const handleLikeComment = (commentId: string) => {
    setComments(prev => prev.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  const handleReplyComment = (commentId: string) => {
    console.log('回复评论:', commentId);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim() || !videoId) return;

    const comment: Comment = {
      id: uuidv4(),
      videoId,
      author: {
        id: 'current-user',
        username: '当前用户',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      },
      content: newComment.trim(),
      likes: 0,
      isLiked: false,
      createdAt: new Date().toISOString()
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  return (
    <div className="comment-panel">
      <div className="comments-header">
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>评论 ({comments.length})</h2>
      </div>

      {video && (
        <div className="video-info-section">
          <img src={video.author.avatar} alt={video.author.username} className="author-avatar" />
          <div className="video-details">
            <h3>@{video.author.username}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      )}

      <div className="comments-list">
        {status === 'loading' && <LoadingSpinner />}
        {status === 'error' && <div className="no-comments"><p>无法加载评论。</p></div>}
        {status === 'success' && (
          comments.length > 0 ? (
            comments.map((comment, index) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onLike={handleLikeComment}
                onReply={handleReplyComment}
                style={{ animationDelay: `${index * 75}ms` }}
              />
            ))
          ) : (
            <div className="no-comments">
              <p>还没有评论，快来抢沙发吧！</p>
            </div>
          )
        )}
      </div>

      <div className="comment-input-section">
        <div className="comment-input-container">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="说点什么..."
            className="comment-input"
          />
          <button 
            className="send-btn"
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentPanel;
