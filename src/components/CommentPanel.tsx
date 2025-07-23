import React, { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import CommentItem from './CommentItem';
import { mockComments } from '../utils/mockData';
import type { Comment, Video } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface CommentPanelProps {
  video: Video;
  isOpen: boolean;
  onClose: () => void;
}

const CommentPanel: React.FC<CommentPanelProps> = ({ video, isOpen, onClose }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const videoComments = mockComments.filter(c => c.videoId === video.id);
    setComments(videoComments);
  }, [video.id]);

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
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: uuidv4(),
      videoId: video.id,
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
    <div className={`comment-panel ${isOpen ? 'open' : ''}`}>
      <div className="comment-panel-header">
        <h3>评论 ({comments.length})</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="video-info-section">
        <img src={video.author.avatar} alt={video.author.username} className="author-avatar" />
        <div className="video-details">
          <h4>@{video.author.username}</h4>
          <p>{video.description}</p>
        </div>
      </div>

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onLike={handleLikeComment}
              onReply={handleReplyComment}
            />
          ))
        ) : (
          <div className="no-comments">
            <p>还没有评论，快来抢沙发吧！</p>
          </div>
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